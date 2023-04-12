import { createReducer } from "@reduxjs/toolkit";
const initialState = {};
const todooReducer = createReducer(initialState, {
  todonewFail: (state, action) => {
    state.error = action.payload;
    state.sucess = false;
    state.loading = false;
  },
  todonewSucess: (state, action) => {
    state.loading = false;
    state.error = null;
    state.sucess = true;
    state.message = "new Event added";
  },
  todonewRequest: (state, action) => {
    state.loading = true;
  },
  markFail: (state, action) => {
    state.error = action.payload;
    state.sucess = false;
    state.loading = false;
  },
  markSucess: (state, action) => {
    state.loading = false;
    state.error = null;
    state.sucess = true;
    state.message = "Event marked";
  },
  markRequest: (state, action) => {
    state.loading = true;
  },
  unmarkFail: (state, action) => {
    state.error = action.payload;
    state.sucess = false;
    state.loading = false;
  },
  unmarkSucess: (state, action) => {
    state.loading = false;
    state.error = null;
    state.sucess = true;
    state.message = "Event unmarked";
  },
  unmarkRequest: (state, action) => {
    state.loading = true;
  },
  deleteFail: (state, action) => {
    state.error = action.payload;
    state.sucess = false;
    state.loading = false;
  },
  deleteSucess: (state, action) => {
    state.loading = false;
    state.error = null;
    state.sucess = true;
    state.message = "Event Deleted";
  },
  deleteRequest: (state, action) => {
    state.loading = true;
  },
  updateFail: (state, action) => {
    state.error = action.payload;
    state.sucess = false;
    state.loading = false;
  },
  updateSucess: (state, action) => {
    state.loading = false;
    state.error = null;
    state.sucess = true;
    state.message = "Event Updated";
  },
  updateRequest: (state, action) => {
    state.loading = true;
  },
  clearError: (state, action) => {
    state.error = null;
  },
  clearMessage: (state, action) => {
    state.message = null;
  },
});

export default todooReducer;
