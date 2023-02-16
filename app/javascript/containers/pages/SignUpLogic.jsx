import React, { useState } from "react"
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAuth, setCurrentUser } from "../../redux/slices/userSlice"
import userSignUp from "../../components/helpers/userQueries/userSignUp"
import userSignOut from "../../components/helpers/userQueries/userSignOut"


function SignUp() {

  const [userFormData, setUserFormData] = useState({email:"", password:"", password_confirmation:""})
  const dispatch = useDispatch()
  const currentUserStore = useSelector(state => state.userManager.currentUser)
  const isLogged = useSelector(state => state.userManager.isLogged )
  const authToken = useSelector(state => state.userManager.authToken)

  const handleEmail = (e) => {
    e.preventDefault()
    setUserFormData({...userFormData, email: e.target.value})
  }

  const handlePassword = (e) => {
    e.preventDefault()
    setUserFormData({...userFormData, password: e.target.value})
  }
  const handlePasswordConfirmation = (e) => {
    e.preventDefault()
    setUserFormData({...userFormData, password_confirmation: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO basic validations
    userSignUp(userFormData)
    .then(response => {
      if (response.isLogged) {
        // If another account is logged in, we must log out that one and log in the new one
        if (isLogged) {
          userSignOut(authToken)
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



  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 container">
        <div>
          <h1>Current user</h1>
          <p>{ currentUserStore.email || "none"}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleEmail} placeholder="Correo" />
          <input type="password" onChange={handlePassword} placeholder="Contraseña" />
          <input type="password" onChange={handlePasswordConfirmation} placeholder="Confirmar contraseña" />
          <button type="submit" >Registrarse</button>
        </form>

      </div>
      <Footer/>
    </Layout>
  )
}

export default SignUp
