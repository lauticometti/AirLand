import { configureStore } from '@reduxjs/toolkit'
import { authSlice, cartSlice } from './slices'
import { shoesApi } from './services/services'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
	reducer: {
		[shoesApi.reducerPath]: shoesApi.reducer,
		auth: authSlice.reducer,
		cart: cartSlice.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(shoesApi.middleware)
})

setupListeners(store.dispatch)
