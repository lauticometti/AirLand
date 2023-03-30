import { createSlice } from '@reduxjs/toolkit'

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState: {
		page: 1,
		pageSize: 9,
		totalEntries: 1
	},
	reducers: {
		setPage: (state, action) => {
			state.page = action.payload
		},
		setTotalEntries: (state, action) => {
			state.totalEntries = action.payload
		}
	}
})

export const { setPage, setTotalEntries } = paginationSlice.actions
