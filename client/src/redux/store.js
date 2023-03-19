import { configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD
import { authSlice, filterSlice } from './slices'
=======
import { authSlice, cartSlice } from './slices'
>>>>>>> develop
import { shoesApi } from './services/services'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
	reducer: {
		[shoesApi.reducerPath]: shoesApi.reducer,
<<<<<<< HEAD
		filter: filterSlice.reducer,
		auth: authSlice.reducer
=======
		auth: authSlice.reducer,
		cart: cartSlice.reducer
>>>>>>> develop
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(shoesApi.middleware)
})

setupListeners(store.dispatch)
