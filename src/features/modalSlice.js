import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    OpenModal: (state) => {
      state.modalOpen = true;
    },
    CloseModal: (state) => {
      state.modalOpen = false;
    },
  },
});

export const { OpenModal, CloseModal } = modalSlice.actions;

export default modalSlice.reducer;
