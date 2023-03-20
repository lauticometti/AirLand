import { configureStore } from '@reduxjs/toolkit'
import { authSlice, cartSlice, filterSlice } from './slices'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { shoesApi } from './services/services'
import { filteredShoesApi } from './services/filteredShoes'

export const store = configureStore({
	reducer: {
		[shoesApi.reducerPath]: shoesApi.reducer,
		[filteredShoesApi.reducerPath]: filteredShoesApi.reducer,
		auth: authSlice.reducer,
		filter: filterSlice.reducer,
		cart: cartSlice.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(shoesApi.middleware)
			.concat(filteredShoesApi.middleware)
})

setupListeners(store.dispatch)
