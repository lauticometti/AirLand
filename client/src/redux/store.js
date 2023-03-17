import { configureStore } from '@reduxjs/toolkit'
import shoeReducer, { fetchShoes } from './slices/shoesSlice'

const store = configureStore({
	reducer: {
		shoes: shoeReducer
	}
})

store.dispatch(fetchShoes())

export default store
