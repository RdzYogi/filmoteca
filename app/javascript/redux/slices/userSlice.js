import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userAuth: localStorage.getItem("auth_token") || "",
  currentUser: {
    id: localStorage.getItem("current_user") ? JSON.parse(localStorage.getItem("current_user")).id : "",
    email: localStorage.getItem("current_user") ? JSON.parse(localStorage.getItem("current_user")).email : "",
    admin: false,
    logged_in: false
  }
}

export const verifyUserToken = createAsyncThunk("userManager/verifyUserToken",async ()=>{
  const result = {isLogged: false, isAdmin: false}
  const state = store.getState()
  console.log("before fetch:", state)
  await fetch('/users/sign_in', {
    method: 'GET',
    headers: {'Content-Type': 'application/json', "Authorization": state.userManager.userAuth},
  })
  .then(response => {
    if (response.ok) {
      result.isLogged = true
      return response.json();
    }
  })
  .then(json => {
    // check if user is admin
    if (json.user.admin === true) {
      result.isAdmin = true
    }
  })
  return result
})

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
    resetLocalStorage: (state) => {
      state.userAuth = ""
      state.currentUser = {id: "", email: "", admin: false, logged_in: false}
      localStorage.setItem("auth_token", "")
      localStorage.setItem("current_user", "")
    },
    isLogged: (state) => {
      state.currentUser.logged_in = true
    },
    isAdmin: (state) => {
      state.currentUser.admin = true
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyUserToken.pending, (state, action) => {
      })
      .addCase(verifyUserToken.fulfilled, (state, action) => {
        console.log("fulfilled")
        console.log(action.payload)
        if (action.payload.isLogged === true) {
          state.currentUser.logged_in = true
        }
        if (action.payload.isAdmin === true) {
          state.currentUser.admin = true
        }
      })
      .addCase(verifyUserToken.rejected, (state, action) => {
      })
  }
})

export const {
  setUserAuth,
  setCurrentUser,
  resetLocalStorage,
  isLogged,
  isAdmin
 } = userSlice.actions

export default userSlice.reducer
