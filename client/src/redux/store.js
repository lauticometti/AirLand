import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { authSlice, cartSlice, filterSlice, paginationSlice } from './slices'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { shoesApi } from './services/services'
import { filteredShoesApi } from './services/filteredShoes'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
	key: 'root',
	version: 1,
	storage
}

const reducer = combineReducers({
	[shoesApi.reducerPath]: shoesApi.reducer,
	[filteredShoesApi.reducerPath]: filteredShoesApi.reducer,
	auth: authSlice.reducer,
	filter: filterSlice.reducer,
	cart: cartSlice.reducer,
	pagination: paginationSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(shoesApi.middleware)
			.concat(filteredShoesApi.middleware)
})

setupListeners(store.dispatch)
