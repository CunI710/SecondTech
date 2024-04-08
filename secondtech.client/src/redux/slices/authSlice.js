import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';

export const getUser = createAsyncThunk('products/getUser', async () => {
  const { data } = await axios.get(`${BASE_URL}/User/getInfo`);
  return data;
});

export const login = createAsyncThunk('products/login', async (values) => {
  const { data } = await axios.post(`${BASE_URL}/User/login`, values);
  return data;
});

const initialState = { user: '', loginUser: '', isLoading: true };
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
      console.log('pending');
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      console.log('succes');
    });

    builder.addCase(getUser.rejected, (state) => {
      state.isLoading = false;
      console.log('rejected');
    });

    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      console.log('pending');
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.loginUser = action.payload;
      state.isLoading = false;
      console.log('succes');
    });

    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      console.log('rejected');
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
