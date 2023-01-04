import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isOpenModal: false,
  //ranking: {},
};

const sampleModalSlice = createSlice({
  name: "sampleModal",
  initialState,
  reducers: {
    openModalAction: (state, { payload }) => {
      console.log(payload);
      return { ...state, isOpenModal: true };
    },
    closeModalAction: (state, { payload }) => {
      // return { ...state, isOpenModal: false, ranking: {} };
      return { ...state, isOpenModal: false };
    },
  },
});

export const { openModalAction, closeModalAction } = sampleModalSlice.actions;

export const sampleModalSelector = (state) => state.modal;

export default sampleModalSlice.reducer;
