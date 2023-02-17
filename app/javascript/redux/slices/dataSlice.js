import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  moviesStatus: "idle",
  cycles: [],
  cyclesStatus: "idle"
}
export const fetchMoviesData = createAsyncThunk("dataManager/fetchMovieData",async ()=>{
  let movies = []
  await fetch('api/v1/movies')
      .then((response) => response.json())
      .then((data) => {
        movies = data
      });
  return movies
})

export const fetchCyclesData = createAsyncThunk("dataManager/fetchCycleData",async ()=>{
  let cycles = []
  await fetch('api/v1/cycles')
      .then((response) => response.json())
      .then((data) => {
        cycles = data
      });
  return cycles
})

export const dataSlice = createSlice({
  name: "dataManager",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesData.fulfilled, (state, action) => {
        state.movies = action.payload
        state.moviesStatus = "succeeded"
      })
      .addCase(fetchCyclesData.fulfilled, (state, action) => {
        state.cycles = action.payload
      })
  }

})

export default dataSlice.reducer
