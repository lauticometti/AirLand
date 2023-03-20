import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    get: (state, { payload }) => {
      state.cart = payload
    },
  }
});

// Action creators are generated for each case redicer function
export const { get } = cartSlice.actions;