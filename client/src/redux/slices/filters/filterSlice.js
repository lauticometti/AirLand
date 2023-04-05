import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		filters: {
			sizes: '',
			types: [],
			minPrice: 0,
			name: ''
		},
		sort: {
			type: '',
			order: 'up'
		},
		refresh: false
	},
	reducers: {
		setFilters: (state, { payload }) => {
			state.filters[payload.filterType] = payload.data
		},
		setSort: (state, { payload }) => {
			state.sort.type = payload.sortType
			state.sort.order = payload.order
		},
		setRefresh: (state, { payload }) => {
			state.refresh = payload
		}
	}
})

export const { setFilters, setSort, setRefresh } = filterSlice.actions
