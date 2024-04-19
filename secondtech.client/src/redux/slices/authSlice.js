import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';

export const getUser = createAsyncThunk('user/getUser', async () => {
  const token = localStorage.getItem('token');

  if (token) {
    const { data } = await axios.get(`${BASE_URL}/User/getInfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }
});

export const login = createAsyncThunk('user/login', async (values) => {
  const token = localStorage.getItem('token');
  const { data } = await axios.post(`${BASE_URL}/User/login`, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  localStorage.setItem('token', data.jwt);
  localStorage.setItem('role', data.userInfo.role);
  localStorage.setItem('userName', data.userInfo.username);
  return data;
});

export const signup = createAsyncThunk('user/signup', async (values) => {
  console.log(values);
  const { data } = await axios.post(`${BASE_URL}/User/register`, values);
  console.log(data);
  localStorage.setItem('token', data.jwt);
  localStorage.setItem('role', data.userInfo.role);
  return data;
});

const initialState = { user: '', isLoading: true };
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
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
      state.user = action.payload;
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
