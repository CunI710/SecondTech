import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async (params = {}) => {
  const { category = null, brand = null, color = null, priceFrom = null, priceTo = null } = params;
  const datas = {
    category,
    brand,
    color,
    priceFrom,
    priceTo,
  };
  const { data } = await axios.get(`${BASE_URL}/Product/filtr?category=${category}`);
  return data;
});

export const getProductById = createAsyncThunk('products/getProductById', async (id) => {
  const { data } = await axios.get(`${BASE_URL}/Product/get?id=${id}`);
  return data;
});

export const deleteProducts = createAsyncThunk('products/deleteProducts', async (productId) => {
  const { data } = await axios.delete(`${BASE_URL}/Product/delete?Id=${productId}`);
  return data;
});

const initialState = { products: [], isLoading: true, productId: 0, item: [] };
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductId: (state, action) => {
      state.productId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
      console.log('pending');
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      console.log('succes');
    });

    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
      console.log('rejected');
    });

    builder.addCase(deleteProducts.pending, (state) => {
      state.isLoading = true;
      console.log('pending');
    });

    builder.addCase(deleteProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log('succes');
      console.log(action);
      state.products = state.products.filter((product) => product.id !== action.meta.arg);
      console.log('Filtered products:', state.products);
    });

    builder.addCase(deleteProducts.rejected, (state) => {
      state.isLoading = false;
      console.log('rejected');
    });

    builder.addCase(getProductById.pending, (state) => {
      state.isLoading = true;
      console.log('pending');
    });

    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
      console.log('succes');
    });

    builder.addCase(getProductById.rejected, (state) => {
      state.isLoading = false;
      console.log('rejected');
    });
  },
});

export const { setProducts, setProductId } = productsSlice.actions;

export default productsSlice.reducer;
