import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAuth: localStorage.getItem("auth_token") || "",
  currentUser: {
    id: localStorage.getItem("current_user") ? JSON.parse(localStorage.getItem("current_user")).id : "",
    email: localStorage.getItem("current_user") ? JSON.parse(localStorage.getItem("current_user")).email : "",
    admin: false,
    logged_in: false
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
      state.currentUser.logged_in = true
      localStorage.setItem("current_user", JSON.stringify(action.payload));
    },
    getUserAuth: (state) => {
      state.userAuth = localStorage.getItem("auth_token")
    },
    getCurrentUser: (state) => {
      state.currentUser = JSON.parse(localStorage.getItem("current_user"))
    },
    resetLocalStorage: (state) => {
      state.userAuth = ""
      state.currentUser = {id: "", email: ""}
      localStorage.setItem("auth_token", "")
      localStorage.setItem("current_user", "")
    },
    isLogged: (state) => {
      state.currentUser.logged_in = true
    },
    isAdmin: (state) => {
      state.currentUser.admin = true
    }

  }
})

export const { setUserAuth,
  setCurrentUser,
  getUserAuth,
  getCurrentUser,
  resetLocalStorage,
  isLogged,
  isAdmin
 } = userSlice.actions

export default userSlice.reducer
