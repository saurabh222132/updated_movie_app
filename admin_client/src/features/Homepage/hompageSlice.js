"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "ideal",
  selectedMovieType: "popular",
  message: null,
  movieList: [],
};

const movieListSlice = createSlice({
  name: "movieListSlice",
  initialState,
  reducers: {
    setSelectedMovieType: (state, action) => {
      state.selectedMovieType = action.payload;
    },
    setMovieList: (state, action) => {
      state.movieList = action.payload.movieList;
      console.log("into action", action);
    },
  },
});

// export const { addValue, subValue, addByAmount } = AuthSlice.actions;
export const { setSelectedMovieType, setMovieList } = movieListSlice.actions;

// export const selectSocketInstance = (state) => state.auth.socketInstance;
export const selectedMovieType = (state) => state.movie.selectedMovieType;
export const selectMovieList = (state) => state.movie.movieList;

export const MovieReducer = movieListSlice.reducer;
