import {
	loginUserWithEmailPassword,
	LoginWithGoogle,
	logoutFirebase,
	registerUserWithEmailPassword,
	// loginAnonymously
} from '../../../firebase'
import axios from 'axios'
import { clearCartItems } from '../shopping/shoppingSlice'
import { checkingCredentials, loadUserAddress, loadUserData, logOut, signIn } from './'

const BASE_URL = import.meta.env.VITE_BACK_URL || "http://localhost:3001/api"

export const startRegistrationUserWithEmailPassword = ({
	email,
	password,
	displayName
}) => {
	return async dispatch => {
		// primero: chequeo credenciales
		dispatch(checkingCredentials())

		// segundo: utilizo el provider para registrar el usuario
		const response = await registerUserWithEmailPassword({
			email,
			password,
			displayName
		})

		// si ok = false: no se pudo registrar al usuario => despacho la funcion logOut
		if (!response.ok) return dispatch(logOut(response.message))

		// tercero: cargo el usuario a la DB
		const { data } = await axios.post(
			`${BASE_URL}/users`,
			{
				user: response
			}
		)

		// cuarto: logeo al usuario correctamente registrado
		dispatch(signIn(data))
	}
}

export const startLoginUserWithEmailPassword = ({ email, password }) => {
	return async dispatch => {
		// primero: chequeo credenciales
		dispatch(checkingCredentials())

		// segundo: utilizo el provider para logear el usuario
		const response = await loginUserWithEmailPassword({ email, password })

		// si ok = false: no se pudo logear al usuario => despacho la funcion logOut
		if (!response.ok) return dispatch(logOut(response.message))

		// tercero: traigo los datos del usuario de la DB
		const { data: userData } = await axios.get(
			`${BASE_URL}/users/${response.uid}`,
		)

		// cuarto: traigo la data de address de la DB
		const { data: addressData } = await axios.get(
			`${BASE_URL}/users/user-address/${response.uid}`
		)

		// quinto: logeo al usuario y cargo addressdata
		dispatch(signIn(userData))
		dispatch(loadUserAddress(addressData))
	}
}

export const startGoogleSignIn = () => {
	return async dispatch => {
		// primero: chequeo credenciales
		dispatch(checkingCredentials())

		// segundo: utilizo el provider para logear el usuario
		const response = await LoginWithGoogle()

		// si ok = false: no se pudo logear al usuario => despacho la funcion logOut
		if (!response.ok) return dispatch(logOut(response))

		// tercero: cargo el usuario a la DB o lo traigo de la DB si ya existe
		const { data: userData } = await axios.post(
			`${BASE_URL}/users`,
			{
				user: response
			}
		)

		// cuarto: traigo la data de address de la DB
		const { data: addressData } = await axios.get(
			`${BASE_URL}/users/user-address/${response.uid}`
		)

		// quinto: logeo al usuario y cargo addressdata
		dispatch(signIn(userData))
		dispatch(loadUserAddress(addressData))
	}
}

export const startLogout = () => {
	return async dispatch => {
		await logoutFirebase()
		dispatch(logOut())
		setTimeout(() => {
			return dispatch(clearCartItems())
		}, 1000)
	}
}

export const editUserInfo = (id, form) => {
	return async dispatch => {
		const { data } = await axios.patch(
			`${BASE_URL}/users/user-info/${id}`,
			{
				userInfo: form
			}
		)
		dispatch(loadUserData(data))
	}
}

export const editUserAddress = (id, form) => {
	return async dispatch => {
		const { data } = await axios.post(
			`${BASE_URL}/users/user-address/${id}`,
			{
				userAddress: form
			}
		)
		dispatch(loadUserAddress(data))
	}
}