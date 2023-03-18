import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		status: 'checking', // 'checking', 'authenticated', 'not-authenticated'
		uid: null,
		email: null,
		displayName: null,
		errorMessage: null
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
			state.errorMessage = null
		},
		Logout: (state, { payload }) => {
			state.status = 'not-authenticated'
			state.uid = null
			state.email = null
			state.displayName = null
			state.errorMessage = payload || null
		}
	}
})

// Action creators are generated for each case reducer function
export const { checkingCredentials, signIn, Logout } = authSlice.actions
