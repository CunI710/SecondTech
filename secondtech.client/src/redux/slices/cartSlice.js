import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const requestSale = createAsyncThunk('products/requestSale', async (values) => {
//   await axios.post(`${BASE_URL}/Product/requestSale`, values);
// });

export const requestSale = createAsyncThunk('products/requestSale', async (values) => {
  try {
    const response = await axios.post(`${BASE_URL}/Product/requestSale`, values);
    return response.data; // Assuming the response contains data
  } catch (error) {
    return rejectWithValue(error); // Dispatch a rejected action with the error
  }
});
const initialState = {
  cart: [],
  openCart: false,
  total: 0,
  count: 0,
  isLoading: true,
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
    clearCart: (state) => {
      state.cart = [];
      state.count = 0;
      state.total = 0;
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
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestSale.pending, (state) => {
      state.isLoading = true;
      console.log('pending');
    });

    builder.addCase(requestSale.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log('succes');
    });

    builder.addCase(requestSale.rejected, (state) => {
      state.isLoading = false;
      console.log('rejected');
    });
  },
});

export const { setCart, setTotal, setLoading, setCount, deleteCart, setOpenCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
