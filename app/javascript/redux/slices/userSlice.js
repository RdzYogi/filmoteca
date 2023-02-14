import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAuth: "",
  currentUser: {
    id: "",
    email: ""
  }
}

export const userSlice = createSlice({
  name : "userManager",
  initialState,
  reducers: {
    setUserAuth: (state, action) => {
      state.userAuth = action.payload
    },
    setCurrentUser: (state, action) => {
      state.currentUser.id = action.payload.id
      state.currentUser.email = action.payload.email
      // state.currentUser = {...state.currentUser, action.payload}
    }
    // More reducers here
  }
})

export const { setUserAuth, setCurrentUser } = userSlice.actions

export default userSlice.reducer
