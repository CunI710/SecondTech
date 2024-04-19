import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async ({ category }) => {
  const { data } = await axios.get(`${BASE_URL}/Product/filtr?category=${category}`);
  return data;
});

export const createProducts = createAsyncThunk('products/createProducts', async (values) => {
  const { data } = await axios.post(`${BASE_URL}/Product/create`, values);
  return data;
});

export const updateProducts = createAsyncThunk('products/updateProducts', async (values) => {
  const token = localStorage.getItem('token');
  if (token) {
    await axios.put(`${BASE_URL}/Product/update`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
});
export const getAllProducts = createAsyncThunk('products/getAllProducts', async ({ category }) => {
  const { data } = await axios.get(`${BASE_URL}/Product/getall`);
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

const initialState = { products: [], isLoading: true, productId: 0, item: [], newProduct: [] };
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
    builder.addCase(updateProducts.pending, (state) => {
      state.isLoading = true;
      console.log('pending');
    });

    builder.addCase(updateProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log('succes');
    });

    builder.addCase(updateProducts.rejected, (state) => {
      state.isLoading = false;
      console.log('rejected');
    });

    builder.addCase(createProducts.pending, (state) => {
      state.isLoading = true;
      console.log('pending');
    });

    builder.addCase(createProducts.fulfilled, (state, action) => {
      state.newProduct = action.payload;
      state.isLoading = false;
      console.log('succes');
    });

    builder.addCase(createProducts.rejected, (state) => {
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
      state.products = state.products.filter((product) => product.id !== action.meta.arg);
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

    builder.addCase(getAllProducts.pending, (state) => {
      state.isLoading = true;
      console.log('pending');
    });

    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      console.log('succes');
    });

    builder.addCase(getAllProducts.rejected, (state) => {
      state.isLoading = false;
      console.log('rejected');
    });
  },
});

export const { setProducts, setProductId } = productsSlice.actions;

export default productsSlice.reducer;
