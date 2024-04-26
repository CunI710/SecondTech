import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async (filters) => {
  console.log(filters);
  const brand = filters.brand && filters.brand !== 'Бренд' ? `&brand=${filters.brand}` : '';
  const color = filters.color && filters.color !== 'Цвет' ? `&color=${filters.color}` : '';
  const { data } = await axios.get(
    `${BASE_URL}/Product/filtr?page=${filters.currentPage}&category=${filters.category}${brand}${color}`,
  );
  return data;
});

export const createProducts = createAsyncThunk('products/createProducts', async (values) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/Product/create`, values);
    return data;
  } catch (error) {
    throw error;
  }
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

const initialState = {
  products: [],
  isLoading: true,
  productId: 0,
  item: [],
  newProduct: [],
  currentPage: 1,
  totalPage: 1,
};
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
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
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
    });

    builder.addCase(createProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.newProduct = action.payload;
    });

    builder.addCase(createProducts.rejected, (state, action) => {
      state.error = action.error.message; // Assuming action.error.message contains the error message
      state.isLoading = false;
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

export const { setProducts, setProductId, setCurrentPage } = productsSlice.actions;

export default productsSlice.reducer;
