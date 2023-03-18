import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices'
import shoeReducer, { fetchShoes } from './slices/shoesSlice'

const store = configureStore({
	reducer: {
		shoes: shoeReducer,
		auth: authSlice.reducer
	}
})

store.dispatch(fetchShoes())

export default store
