import { createSlice } from '@reduxjs/toolkit'

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState: {
		page: 1,
		pageSize: 9,
		totalPages: 1
	},
	reducers: {
		setPage: (state, action) => {
			state.page = action.payload
		},
		setTotalPages: (state, action) => {
			state.totalPages = action.payload
		}
	}
})

export const { setPage, setTotalPages } = paginationSlice.actions
