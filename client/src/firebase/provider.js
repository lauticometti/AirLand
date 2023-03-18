import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile
} from 'firebase/auth'
import { FirebaseAuth } from './'

export const registerUserWithEmailPassword = async ({
	email,
	password,
	displayName
}) => {
	try {
		const response = await createUserWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		)
		console.log(response)
		const { uid } = response.user
		await updateProfile(FirebaseAuth.currentUser, { displayName })
		return {
			ok: true,
			displayName,
			uid,
			email
		}
	} catch (error) {
		return {
			ok: false,
			message: error.message
		}
	}
}

export const loginUserWithEmailPassword = async ({ email, password }) => {
	try {
		const response = await signInWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		)
		console.log(response)
		const { uid, displayName } = response.user
		return {
			ok: true,
			uid,
			displayName,
			email
		}
	} catch (error) {
		return {
			ok: false,
			message: error.message
		}
	}
}
