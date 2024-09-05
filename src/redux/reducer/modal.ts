import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

const initialState = {
  isOpenModal: false,
  //ranking: {},
};

export const sampleModalSlice = createSlice({
  name: "sampleModal",
  initialState,
  reducers: {
    openModalAction: (state) => {
      return { ...state, isOpenModal: true };
    },
    closeModalAction: (state) => {
      return { ...state, isOpenModal: false };
    },
  },
});

export const { openModalAction, closeModalAction } = sampleModalSlice.actions;

export const sampleModalSelector = (state: RootState) => state.sampleModal;

export default sampleModalSlice.reducer;
