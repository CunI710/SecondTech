import { createSlice } from '@reduxjs/toolkit';

const initialState = { openDelete: false, openUpdate: false, productId: '' };

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOpenDelete: (state, action) => {
      state.openDelete = action.payload;
    },
    setOpenUpdate: (state, action) => {
      state.openUpdate = action.payload;
    },
    setModalId: (state, action) => {
      state.productId = action.payload;
    },
  },
});

export const { setOpenDelete, setOpenUpdate, setModalId } = modalSlice.actions;

export default modalSlice.reducer;
