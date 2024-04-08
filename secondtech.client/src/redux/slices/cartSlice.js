import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const requestSale = createAsyncThunk('products/requestSale', async (values) => {
  const { data } = await axios.post(`${BASE_URL}/Product/requestSale`, values);
  return data;
});

const initialState = {
  cart: [],
  openCart: false,
  total: 0,
  count: 0,
  isLoading: true,
  checkout: [],
};
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
    setOpenCart: (state, action) => {
      state.openCart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestSale.pending, (state) => {
      state.isLoading = true;
      console.log('pending');
    });

    builder.addCase(requestSale.fulfilled, (state, action) => {
      state.checkout = action.payload;
      state.isLoading = false;
      console.log('succes');
    });

    builder.addCase(requestSale.rejected, (state) => {
      state.isLoading = false;
      console.log('rejected');
    });
  },
});

export const { setCart, setTotal, setCount, deleteCart, setOpenCart } = cartSlice.actions;

export default cartSlice.reducer;
