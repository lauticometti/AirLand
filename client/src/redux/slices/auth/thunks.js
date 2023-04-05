import {
	changePassword,
	loginUserWithEmailPassword,
	LoginWithGoogle,
	logoutFirebase,
	registerUserWithEmailPassword
} from '../../../firebase'
import Swal from 'sweetalert2'
import axios from 'axios'
import { clearCartItems } from '../shopping/shoppingSlice'
import {
	checkingCredentials,
	loadUserAddress,
	loadUserData,
	logOut,
	signIn,
	deleteAddressByIndex
} from './'

const BASE_URL = import.meta.env.VITE_BACK_URL || 'http://localhost:3001/api'

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
		const { data } = await axios.post(`${BASE_URL}/users`, {
			user: response
		})

		// cuarto: logeo al usuario correctamente registrado
		dispatch(signIn(data))
		Swal.fire({
			title: `Bienvenido ${data.displayName}`,
			height: 600,
			// icon: 'success',
			timer: '2000'
		})
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
			`${BASE_URL}/users/${response.uid}`
		)

		// cuarto: traigo la data de address de la DB
		const { data: addressData } = await axios.get(
			`${BASE_URL}/users/user-address/${response.uid}`
		)

		// quinto: logeo al usuario y cargo addressdata
		dispatch(signIn(userData))
		dispatch(loadUserAddress(addressData))
		Swal.fire({
			title: `Bienvenido otra véz, ${userData.displayName}`,
			// icon: 'success',
			heigth: 600,
			timer: '2000',
			showConfirmButton: false
		})
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
		const { data: userData } = await axios.post(`${BASE_URL}/users`, {
			user: response
		})

		// cuarto: traigo la data de address de la DB
		const { data: addressData } = await axios.get(
			`${BASE_URL}/users/user-address/${response.uid}`
		)

		// quinto: logeo al usuario y cargo addressdata
		dispatch(signIn(userData))
		dispatch(loadUserAddress(addressData))
		Swal.fire({
			title: `Bienvenido ${userData.displayName}`,
			height: 1000,
			timer: '2000',
			showConfirmButton: false
		})
	}
}

export const startLogout = (setLeave) => {
	return async dispatch => {
		await logoutFirebase()
		Swal.fire({
			position: 'center',
			title: 'Are you sure you want to go?',
			showCancelButton: true,
			confirmButtonText: 'Yes',
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				dispatch(logOut())
				setTimeout(() => {
					return dispatch(clearCartItems())
				}, 1000)
				setLeave(true)
			} else if (result.isDenied) {
				return
			}
		})
	}
}

export const editUserInfo = (id, form) => {
	return async dispatch => {
		const { data } = await axios.patch(`${BASE_URL}/users/user-info/${id}`, {
			userInfo: form
		})
		dispatch(loadUserData(data))
	}
}

export const editUserAddress = (id, form) => {
	return async dispatch => {
		const { data } = await axios.post(`${BASE_URL}/users/user-address/${id}`, {
			userAddress: form
		})
		dispatch(loadUserAddress(data))
	}
}

export const editUserPassword = newPassword => {
	return async dispatch => {
		await changePassword(newPassword)
	}
}

export const getAllUserAddress = (uid) => {
	return async dispatch => {
		const { data: addressData } = await axios.get(
			`${BASE_URL}/users/user-address/${uid}`
		)
		dispatch(loadUserAddress(data))
	}
}

export const deleteUserAddress = (index, uid) => {
	return async dispatch => {
		const { data: message } = await axios.delete(
			`${BASE_URL}/users/user-address/`,
			{
				index: index,
				userId: uid
			}
		)
		Swal.fire({
			title: message,
			icon: 'success',
			timer: '2000'
		})
		dispatch(deleteAddressByIndex(index))
	}
}