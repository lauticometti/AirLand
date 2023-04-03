import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState: {},
	reducers: {
		clearOrders: state => {
			state.orders = []
		}
	}
})

// Action creators are generated for each case redicer function
export const {} = userSlice.actions
