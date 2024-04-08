import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';

export const getProductByName = createAsyncThunk('search/getProductByName', async (name) => {
  const { data } = await axios.get(`${BASE_URL}/Product/search?request=${name}&page=1`);
  return data;
});

const initialState = { searchProducts: [], searchValue: '', isLoading: true, count: 0 };
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchProducts = action.payload; // Обновляем state.searchProducts, а не state.search
    },
    setCount: (state, action) => {
      state.count += action.payload;
    },
    setValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductByName.pending, (state) => {
      state.isLoading = true;
      console.log('pending');
    });

    builder.addCase(getProductByName.fulfilled, (state, action) => {
      state.searchProducts = action.payload; // Обновляем state.searchProducts
      state.isLoading = false;
      console.log('succes');
    });

    builder.addCase(getProductByName.rejected, (state) => {
      state.isLoading = false;
      console.log('rejected');
    });
  },
});

export const { setSearch, setCount, setValue } = searchSlice.actions;

export default searchSlice.reducer;
