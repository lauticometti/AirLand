import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import shoeReducer, { fetchShoes } from "./slices/shoesSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    shoes: shoeReducer,
  },
});

store.dispatch(fetchShoes());

export default store;
