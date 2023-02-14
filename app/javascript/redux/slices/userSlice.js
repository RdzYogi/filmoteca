import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAuth: "",
  currentUser: {
    id: "",
    email: ""
  }
}


// Todo refactor this
export const userSlice = createSlice({
  name : "userManager",
  initialState,
  reducers: {
    setUserAuth: (state, action) => {
      state.userAuth = action.payload
      localStorage.setItem("auth_token", action.payload);
    },
    setCurrentUser: (state, action) => {
      state.currentUser.id = action.payload.id
      state.currentUser.email = action.payload.email
      localStorage.setItem("current_user", JSON.stringify(action.payload));
    },
    getUserAuth: (state) => {
      state.userAuth = localStorage.getItem("auth_token")
    },
    getCurrentUser: (state) => {
      state.currentUser = JSON.parse(localStorage.getItem("current_user"))
    },
    resetLocalStorage: () => {
      localStorage.setItem("auth_token", "")
      localStorage.setItem("current_user", "")
    }

  }
})

export const { setUserAuth,
  setCurrentUser,
  getUserAuth,
  getCurrentUser
 } = userSlice.actions

export default userSlice.reducer
