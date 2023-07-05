import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { authSlice, shoppingSlice, filterSlice, paginationSlice, refreshSlice, sneakersSlice } from './slices'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { shoesApi } from './services/services'
import { filteredShoesApi } from './services/filteredShoes'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const authPersistConfig = {
	key: 'auth',
	storage
}

const shoppingPersistConfig = {
	key: 'shopping',
	storage
}

const paginationPersistConfig = {
	key: 'pagination',
	storage
}

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer)
const persistedShoppingReducer = persistReducer(shoppingPersistConfig, shoppingSlice.reducer)
const persistedPaginationReducer = persistReducer(paginationPersistConfig, paginationSlice.reducer)

const rootReducer = combineReducers({
	[shoesApi.reducerPath]: shoesApi.reducer,
	[filteredShoesApi.reducerPath]: filteredShoesApi.reducer,
	filter: filterSlice.reducer,
	refresh: refreshSlice.reducer,
	sneakers: sneakersSlice.reducer,
	pagination: persistedPaginationReducer,
	auth: persistedAuthReducer,
	shopping: persistedShoppingReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(shoesApi.middleware)
			.concat(filteredShoesApi.middleware)
})

setupListeners(store.dispatch)
