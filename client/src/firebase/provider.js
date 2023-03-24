import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	GoogleAuthProvider,
	signInWithPopup,
	// signInAnonymously
} from 'firebase/auth'
import { FirebaseAuth } from './'

const googleProvider = new GoogleAuthProvider()

export const LoginWithGoogle = async () => {
	try {
		const response = await signInWithPopup(FirebaseAuth, googleProvider)
		const { displayName, email, uid, photoURL } = response.user
		return {
			ok: true,
			displayName,
			email,
			uid,
			photoURL
		}
	} catch (error) {
		return {
			ok: false,
			code: error.code,
			message: error.message
		}
	}
}

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
		const { uid, photoURL } = response.user
		await updateProfile(FirebaseAuth.currentUser, { displayName })
		return {
			ok: true,
			displayName,
			uid,
			email,
			photoURL
		}
	} catch (error) {
		return {
			ok: false,
			code: error.code,
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
		const { uid, displayName, photoURL } = response.user
		return {
			ok: true,
			uid,
			displayName,
			email,
			photoURL
		}
	} catch (error) {
		return {
			ok: false,
			code: error.code,
			message: error.message
		}
	}
}

export const logoutFirebase = async () => {
	return await FirebaseAuth.signOut()
}