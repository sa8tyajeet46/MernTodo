import { createReducer } from "@reduxjs/toolkit";
const initialState = {};
const todoReducer = createReducer(initialState, {
  todoFail: (state, action) => {
    state.error = action.payload;
    state.todo = {};
    state.loading = false;
  },
  todoSucess: (state, action) => {
    state.loading = false;
    state.error = null;
    state.todo = action.payload;
  },
  todoRequest: (state, action) => {
    state.loading = true;
  },
  clearError: (state, action) => {
    state.error = null;
  },
});

export default todoReducer;
