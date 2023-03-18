import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

import { shoesApi } from './services'

export const store = configureStore({
	reducer: {
		[shoesApi.reducerPath]: shoesApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(shoesApi.middleware)
})

setupListeners(store.dispatch)
