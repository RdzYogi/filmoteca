import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userAuth: localStorage.getItem("auth_token") || "",
  currentUser: {
    admin: false,
    logged_in: false
  }
}

export const verifyUserToken = createAsyncThunk("userManager/verifyUserToken",async ()=>{
  const result = {user: {},
  authToken: '',
  isLogged: false,
  isAdmin: false,
  error: ''}
  const state = store.getState()
  await fetch('/member-data', {
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
    result.user = json.user
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
    if (response.ok) {
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
    authToken: '',
    isLogged: false,
    isAdmin: false
  }

  await fetch('/users', {
    method: 'POST',
    headers: {'Content-Type': 'application/json',"X-CSRF-Token": csrfToken},
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      result.authToken = response.headers.get('Authorization')
      return response.json();
    } else {
      return response.json().then(json=> {
        throw (json.errors)
      })
    }
  })
  .then(json => {
    result.user = json
    if (json.admin === true) {
      result.isAdmin = true
    }
  }).catch(errors => {
    if(errors.email){
      alert(`Email ${errors.email}`)
    } else if (errors.password) {
      alert(`Password ${errors.password}`)
    } else if (errors.password_confirmation) {
      alert(`Password confirmation ${errors.password_confirmation}`)
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
          state.currentUser = {admin: false, logged_in: false}
          localStorage.setItem("auth_token", "")

        }
        if (action.payload.isAdmin === true) {
          state.currentUser.admin = true
        }
      })
      .addCase(verifyUserToken.rejected, (state, action) => {
        state.userAuth = ""
        state.currentUser = {admin: false, logged_in: false}
        localStorage.setItem("auth_token", "")
      })
      .addCase(userSignOut.pending, (state, action) => {})
      .addCase(userSignOut.fulfilled, (state, action) => {
        if (action.payload) {
          state.userAuth = ""
          state.currentUser = {admin: false, logged_in: false}
          localStorage.setItem("auth_token", "")
        }
      })
      .addCase(userSignOut.rejected, (state, action) => {})
      .addCase(userSignIn.pending, (state, action) => {})
      .addCase(userSignIn.fulfilled, (state, action) => {
        if (action.payload.isLogged === true) {
          state.userAuth = action.payload.authToken
          state.currentUser.logged_in = true
          localStorage.setItem("auth_token", action.payload.authToken);
          if (action.payload.isAdmin === true) {
            state.currentUser.admin = true
          }
        }
      })
      .addCase(userSignIn.rejected, (state, action) => {
        state.userAuth = ""
        state.currentUser = {admin: false, logged_in: false}
        localStorage.setItem("auth_token", "")
      })
      .addCase(userSignUp.pending, (state, action) => {})
      .addCase(userSignUp.fulfilled, (state, action) => {
        if (action.payload.authToken !== "") {
          state.userAuth = action.payload.authToken
          state.currentUser.logged_in = true
          localStorage.setItem("auth_token", action.payload.authToken);
        }
      })
      .addCase(userSignUp.rejected, (state, action) => {})
  }
})


export default userSlice.reducer
