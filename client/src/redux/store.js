import { configureStore } from '@reduxjs/toolkit'
import { getShoes } from './slices/fetchShoes'

const store = configureStore({
  reducer: {
    shoes: getShoes,
  },
})

export default store
