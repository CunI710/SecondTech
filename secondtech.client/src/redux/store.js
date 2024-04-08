import { configureStore } from '@reduxjs/toolkit';
import products from './slices/productsSlice';
import cart from './slices/cartSlice';
import search from './slices/searchSlice';
import auth from './slices/authSlice';

export const store = configureStore({
  reducer: {
    products,
    cart,
    search,
    auth,
  },
});
