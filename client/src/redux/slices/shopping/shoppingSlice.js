import { createSlice } from '@reduxjs/toolkit'

export const shoppingSlice = createSlice({
	name: 'shopping',
	initialState: {
		cartItems: [],
		totalPrice: 0,
		orders: []
	},
	reducers: {
		getCartItems: (state, { payload }) => {
			state.cartItems = payload
			state.totalPrice = state.cartItems.reduce((acum, sneaker) => acum + sneaker.price, 0)
		},
		clearCartItems: state => {
			state.cartItems = []
			state.totalPrice = 0
		},
		getOrders: (state, { payload }) => {
			state.orders = payload
		},
		clearOrders: (state) => {
			state.orders = []
		}
	}
})

// Action creators are generated for each case redicer function
export const { getCartItems, clearCartItems, getOrders, clearOrders } = shoppingSlice.actions
