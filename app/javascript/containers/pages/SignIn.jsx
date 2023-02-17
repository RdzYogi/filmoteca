import React, { useState } from "react"
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAuth, setCurrentUser, resetLocalStorage, isLogged, isAdmin, userSignOut } from "../../redux/slices/userSlice"
import userSignIn from "../../components/helpers/userQueries/userSignIn"
// import userSignOut from "../../components/helpers/userQueries/userSignOut"


function SignIn() {

  // Save the info that the user types in the form
  const [userFormData, setUserFormData] = useState({email:"", password:""})

  // Get info about the current user from redux to display
  const currentUserStore = useSelector(state => state.userManager.currentUser)
  // Get the auth token for sign out
  const authToken = useSelector(state => state.userManager.authToken)

  // dispatch will allow us to call redux reducers
  const dispatch = useDispatch()

  const handleEmail = (e) => {
    e.preventDefault()
    setUserFormData({...userFormData, email: e.target.value})
  }

  const handlePassword = (e) => {
    e.preventDefault()
    setUserFormData({...userFormData, password: e.target.value})
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    userSignIn(userFormData)
    .then(response => {
      if (response.isLogged) {
        // If another account is logged in, we must log out that one and log in the new one
        if (isLogged) {
          dispatch(userSignOut())
          .then(()=>{
            dispatch(setUserAuth(response.authToken))
            dispatch(setCurrentUser(response.user))
            dispatch(isLogged())
            response.isAdmin && dispatch(isAdmin())
          })
        } else {
          dispatch(setUserAuth(response.authToken))
          dispatch(setCurrentUser(response.user))
          dispatch(isLogged())
          response.isAdmin && dispatch(isAdmin())
        }
      }
    })
  }

  const handleSignOut = (e) => {
    e.preventDefault()
    dispatch(userSignOut())
    // userSignOut(authToken)
    // .then(response =>{
    //   if (response){
    //     dispatch(resetLocalStorage())
    //   }
    // })
  }


  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 container">
        <div>
          <div>
            <h1>Current user</h1>
            <p>{currentUserStore.email || "none"}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleEmail} placeholder="Correo" />
            <input type="password" onChange={handlePassword} placeholder="Contraseña" />
            <button type="submit" >Entrar</button>
            <button onClick={handleSignOut} >Sign Out</button>
          </form>
        </div>

      </div>
      <Footer/>
    </Layout>
  )
}

export default SignIn
