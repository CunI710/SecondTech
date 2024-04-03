import { createSlice } from '@reduxjs/toolkit';

const initialState = { cart: [], isLoading: true, total: 0, count: 0 };
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      const newItem = action.payload;
      state.cart = [...state.cart, newItem]; // Создаем новый массив с добавленным элементом
      //   localStorage.setItem('cartItem', JSON.stringify(state.cart));
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    setTotal: (state, action) => {
      state.total += action.payload;
    },
    setCount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { setCart, setTotal, setCount, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
