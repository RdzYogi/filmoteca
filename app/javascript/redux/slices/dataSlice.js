import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  cycles: [],
}
export const fetchMovieData = createAsyncThunk("dataManager/fetchMovieData",async ()=>{
  await fetch('api/v1/movies')
      .then((response) => response.json())
      .then((data) => {
        return data
      });
})

export const fetchCycleData = createAsyncThunk("dataManager/fetchCycleData",async ()=>{
  await fetch('api/v1/cycles')
      .then((response) => response.json())
      .then((data) => {
        return data
      });
})

export const dataSlice = createSlice({
  name: "dataManager",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieData.fulfilled, (state, action) => {
        state.movies = action.payload
      })
      .addCase(fetchCycleData.fulfilled, (state, action) => {
        state.cycles = action.payload
      })
  }

})

export default dataSlice.reducer
