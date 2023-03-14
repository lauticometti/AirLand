import { createSlice } from '@reduxjs/toolkit'

const shoesSlice = createSlice({
	name: 'shoes',
	initialState: {
		shoes: [],
		allShoes: []
	},
	reducers: {
		getShoes: async (state, action) => {
			state.shoes.push(action.payload)
		}
	}
})

export const { getShoes } = shoesSlice.actions
