"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "ideal",
  message: null,
  loggedInUser: null,
  movieList: [],
};

const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      // action.payload = { _id :'' , name : '' , email : ' '}
      state.loggedInUser = action.payload;
    },
  },
});

// export const { addValue, subValue, addByAmount } = AuthSlice.actions;
export const { setLoggedInUser } = AuthSlice.actions;

export const selectLoggedInUser = (state) => state.auth.loggedInUser;

// export const selectSocketInstance = (state) => state.auth.socketInstance;

export const AuthReducer = AuthSlice.reducer;
