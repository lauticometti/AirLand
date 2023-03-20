import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		activeFilter: '',
		filterValues: []
	},
	reducers: {
		setFilters: (state, { payload }) => {
			state.activeFilter = payload.filterType
			state.filterValues = payload.filterValues
		}
	}
})

export const { setFilters } = filterSlice.actions
