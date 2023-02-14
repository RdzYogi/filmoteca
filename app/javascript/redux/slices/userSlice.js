import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAuth: ""
}

export const userSlice = createSlice({
  name : "userManager",
  initialState,
  reducers: {
    setUserAuth: (state, action) => {
      state.userAuth = action.payload
    }
    // More reducers here
  }
})

export const { setUserAuth } = userSlice.actions

export default userSlice.reducer
