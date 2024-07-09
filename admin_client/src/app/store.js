import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { AuthReducer } from "../features/Auth/authSlice";
import { MovieReducer } from "../features/Homepage/hompageSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: AuthReducer,
    movie: MovieReducer,
  },
});
