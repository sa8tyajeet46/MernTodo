import { createReducer } from "@reduxjs/toolkit";
const initialState = {};
const signReducer = createReducer(initialState, {
  signSucess: (state, action) => {
    state.sucess = true;
    state.loading = false;
  },
  signFail: (state, action) => {
    state.sucess = false;
    state.loading = false;
    state.err = action.payload;
  },
  signRequest: (state, action) => {
    state.loading = true;
  },
  clearError: (state, action) => {
    state.err = null;
  },
});
export default signReducer;
