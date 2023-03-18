import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices'
import { shoesApi } from './services/services'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
	reducer: {
		[shoesApi.reducerPath]: shoesApi.reducer,
		auth: authSlice.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(shoesApi.middleware)
})

setupListeners(store.dispatch)
