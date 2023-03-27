import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: []
	},
	reducers: {
		get: (state, { payload }) => {
			state.cart = payload
		},
		clearCart: state => {
			state.cart = []
		}
	}
})

// Action creators are generated for each case redicer function
export const { get, clearCart } = cartSlice.actions
