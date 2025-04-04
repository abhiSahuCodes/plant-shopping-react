import { configureStore } from '@reduxjs/toolkit';
import plantsReducer from './plantsSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    plants: plantsReducer,
    cart: cartReducer,
  },
});