import { createReducer } from "@reduxjs/toolkit";
const initialState = {};
const userReducer = createReducer(initialState, {
  LOADUSERFAIL: (state, action) => {
    state.loading = false;
    state.auth = false;
    state.user = null;
    state.error = action.payload;
  },
  LOGINFAIL: (state, action) => {
    state.loading = false;
    state.auth = false;
    state.user = null;
    state.error = action.payload;
  },
  LOADUSERREQUEST: (state) => {
    state.loading = true;
  },
  LOGINREQUEST: (state) => {
    state.loading = true;
  },
  LOADUSERSUCESS: (state, action) => {
    state.loading = false;
    state.auth = true;
    state.user = action.payload;
  },
  LOGINSUCESS: (state, action) => {
    state.loading = false;
    state.auth = true;
    state.user = action.payload;
  },
  LOGOUTSUCESS: (state) => {
    state.loading = false;
    state.auth = false;
    state.user = null;
  },
  LOGOUTFAIL: (state) => {
    state.loading = false;
  },
  LOGOUTREQUEST: (state) => {
    state.loading = true;
  },

  clearError: (state) => {
    state.error = null;
  },
});
export default userReducer;
