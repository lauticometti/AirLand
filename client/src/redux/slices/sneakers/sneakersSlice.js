import { createSlice } from '@reduxjs/toolkit'

export const sneakersSlice = createSlice({
	name: 'sneakers',
	initialState: {
		allSneakers: []
	},
	reducers: {
		setSneakers: (state, { payload }) => {
			state.allSneakers = payload
		}
	}
})

// Action creators are generated for each case reducer function
export const { setSneakers } = sneakersSlice.actions
