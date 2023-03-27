import {
	loginUserWithEmailPassword,
	LoginWithGoogle,
	logoutFirebase,
	registerUserWithEmailPassword,
	// loginAnonymously
} from '../../../firebase'
import { clearCart } from '../cart'
import { checkingCredentials, Logout, signIn } from './'

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

		// si ok = false: no se pudo registrar al usuario => despacho la funcion logout
		if (!response.ok) return dispatch(Logout(response.message))

		// tercero: logeo al usuario correctamente registrado
		dispatch(signIn(response))
	}
}

export const startLoginUserWithEmailPassword = ({ email, password }) => {
	return async dispatch => {
		// primero: chequeo credenciales
		dispatch(checkingCredentials())

		// segundo: utilizo el provider para logear el usuario
		const response = await loginUserWithEmailPassword({ email, password })

		// si ok = false: no se pudo logear al usuario => despacho la funcion logout
		if (!response.ok) return dispatch(Logout(response.message))

		// tercero: logeo al usuario
		dispatch(signIn(response))
	}
}

export const startGoogleSignIn = () => {
	return async dispatch => {
		// primero: chequeo credenciales
		dispatch(checkingCredentials())

		// segundo: utilizo el provider para logear el usuario
		const response = await LoginWithGoogle()

		// si ok = false: no se pudo logear al usuario => despacho la funcion logout
		if (!response.ok) return dispatch(Logout(response))

		// tercero: logeo al usuario
		dispatch(signIn(response))
	}
}

export const startLogout = () => {
	return async dispatch => {
		await logoutFirebase()
		dispatch(Logout())
		setTimeout(() => {
			return dispatch(clearCart())
		}, 1000)
	}
}

// export const startLoginAnonymously = () => {
// 	return async dispatch => {
// 		await loginAnonymously()
// 	}
// }
