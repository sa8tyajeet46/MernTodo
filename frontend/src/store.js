import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import signReducer from "./reducers/signReducer";
import todoReducer from "./reducers/todoReducer";
import todooReducer from "./reducers/todooReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    sign: signReducer,
    todo: todoReducer,
    todoo: todooReducer,
  },
});

export default store;
