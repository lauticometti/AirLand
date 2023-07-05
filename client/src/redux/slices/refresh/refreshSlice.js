import { createSlice } from '@reduxjs/toolkit'

export const refreshSlice = createSlice({
	name: 'refresh',
	initialState: {
		editCount: 0
	},
	reducers: {
		setEditCount: (state, action) => {
			state.editCount = state.editCount + 1
		}
	}
})

export const { setEditCount } = refreshSlice.actions
