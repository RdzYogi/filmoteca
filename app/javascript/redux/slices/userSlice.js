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
  // console.log("before fetch:", state)
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

export const userSignOut = createAsyncThunk("userManager/userSignOut",async ()=>{
  const state = store.getState()
  const csrfToken = document.querySelector("[name='csrf-token']").content
  let result = false
  await fetch('/users/sign_out', {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json',"X-CSRF-Token": csrfToken, "Authorization": state.userManager.userAuth},
  })
  .then(response => {
    if (response.ok) {
      result = true
    } else {
      throw new Error('Something went wrong');
    }
  })
  return result
})

export const userSignIn = createAsyncThunk("userManager/userSignIn", async (user)=>{
  const data = {user: user}
  const csrfToken = document.querySelector("[name='csrf-token']").content
  const result = {
    user: {},
    authToken: '',
    isLogged: false,
    isAdmin: false,
    error: ''
  }
  await fetch('/users/sign_in', {
    method: 'POST',
    headers: {'Content-Type': 'application/json',"X-CSRF-Token": csrfToken},
    body: JSON.stringify(data)
  })
  .then(response => {
    // console.log(response)
    if (response.ok) {
      // console.log(response.headers.get('Authorization'))
      result.authToken = response.headers.get('Authorization')
      result.isLogged = true
    } else {
      return response.json().then(json=> {throw new Error(json.error)})
    }
    return response.json();
  })
  .then(json => {
    if (result.isLogged) {
      result.user = json
      if (json.admin === true) {
        result.isAdmin = true
      }
    }
  }).catch(error => {
    alert(error)
  })
  return result
})

export const userSignUp = createAsyncThunk("userManager/userSignUp", async (user)=>{
  const data = {user: user}
  const state = store.getState()
  const csrfToken = document.querySelector("[name='csrf-token']").content
  const result = {
    user: {},
    authToken: '',
    isLogged: false,
    isAdmin: false
  }
  if (state.userManager.currentUser.logged_in === true) {
    await store.dispatch(userSignOut())
  }
  await fetch('/users', {
    method: 'POST',
    headers: {'Content-Type': 'application/json',"X-CSRF-Token": csrfToken},
    body: JSON.stringify(data)
  })
  .then(response => {
    // console.log(response)
    if (response.ok) {
      // console.log(response.headers.get('Authorization').split(' ')[1])
      result.authToken = response.headers.get('Authorization')
      return response.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then(json => {
    // console.log(json)
    result.user = json.user
    result.user ? result.isLogged = true : result.isLogged = false
    if (json.user.admin === true) {
      result.isAdmin = true
    }
  })
  return result
})

export const userSlice = createSlice({
  name : "userManager",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(verifyUserToken.pending, (state, action) => {
      })
      .addCase(verifyUserToken.fulfilled, (state, action) => {
        if (action.payload.isLogged === true) {
          state.currentUser.logged_in = true
        } else{
          state.userAuth = ""
          state.currentUser = {id: "", email: "", admin: false, logged_in: false}
          localStorage.setItem("auth_token", "")
          localStorage.setItem("current_user", "")
        }
        if (action.payload.isAdmin === true) {
          state.currentUser.admin = true
        }
      })
      .addCase(verifyUserToken.rejected, (state, action) => {
      })
      .addCase(userSignOut.pending, (state, action) => {})
      .addCase(userSignOut.fulfilled, (state, action) => {
        if (action.payload) {
          state.userAuth = ""
          state.currentUser = {id: "", email: "", admin: false, logged_in: false}
          localStorage.setItem("auth_token", "")
          localStorage.setItem("current_user", "")
        }
      })
      .addCase(userSignOut.rejected, (state, action) => {})
      .addCase(userSignIn.pending, (state, action) => {})
      .addCase(userSignIn.fulfilled, (state, action) => {
        if (action.payload.isLogged === true) {
          state.userAuth = action.payload.authToken
          state.currentUser.id = action.payload.user.id
          state.currentUser.email = action.payload.user.email
          state.currentUser.logged_in = true
          localStorage.setItem("auth_token", action.payload.authToken);
          localStorage.setItem("current_user", JSON.stringify(action.payload.user));
        }
      })
      .addCase(userSignIn.rejected, (state, action) => {
        console.log(action.payload)
      })
      .addCase(userSignUp.pending, (state, action) => {})
      .addCase(userSignUp.fulfilled, (state, action) => {
        if (action.payload.isLogged === true) {
          state.userAuth = action.payload.authToken
          state.currentUser.id = action.payload.user.id
          state.currentUser.email = action.payload.user.email
          state.currentUser.logged_in = true
          localStorage.setItem("auth_token", action.payload.authToken);
          localStorage.setItem("current_user", JSON.stringify(action.payload.user));
        }
      })
      .addCase(userSignUp.rejected, (state, action) => {})
  }
})


export default userSlice.reducer
