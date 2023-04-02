import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		status: 'checking', // 'checking', 'authenticated', 'not-authenticated'
		uid: null,
		email: null,
		displayName: null,
		photoURL: null,
		birthDate: null,
		gender: null,
		firstName: null,
		lastName: null,
		address: [],
		errorMessage: null,
	},
	reducers: {
		checkingCredentials: state => {
			state.status = 'checking'
		},
		signIn: (state, { payload }) => {
			state.status = 'authenticated'
			state.uid = payload.uid
			state.email = payload.email
			state.displayName = payload.displayName
			state.photoURL = payload.photoURL
			state.birthDate = payload.birthDate || null
			state.gender = payload.gender || null
			state.firstName = payload.firstName || null
			state.lastName = payload.lastName || null
			state.address = payload.address || []
			state.errorMessage = null
		},
		logOut: (state, { payload }) => {
			state.status = 'not-authenticated'
			state.uid = null
			state.email = null
			state.displayName = null
			state.photoURL = null
			state.birthDate = null
			state.gender = null
			state.firstName = null
			state.lastName = null
			state.address = []
			state.errorMessage = payload || null
		},
		loadUserData: (state, { payload }) => {
			state.birthDate = payload.birthDate
			state.gender = payload.gender
			state.firstName = payload.firstName
			state.lastName = payload.lastName
		},
		loadUserAddress: (state, { payload }) => {
			state.address = [...state.address, ...payload]
		}
	}
})

// Action creators are generated for each case reducer function
export const { checkingCredentials, signIn, logOut, loadUserData, loadUserAddress } = authSlice.actions
