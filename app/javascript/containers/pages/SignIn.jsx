import React, { useState } from "react"
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { userSignOut, userSignIn } from "../../redux/slices/userSlice"
import { Link } from "react-router-dom"


function SignIn() {

  // Save the info that the user types in the form
  const [userFormData, setUserFormData] = useState({email:"", password:""})

  // Get info about the current user from redux to display
  const currentUserStore = useSelector(state => state.userManager.currentUser)

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
    dispatch(userSignIn(userFormData))
  }

  const handleSignOut = (e) => {
    e.preventDefault()
    dispatch(userSignOut())
  }


  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 container">
        <div className="flex justify-center items-center flex-col">
          <div className="text-center my-4">
            <h1>Current user</h1>
            <p>{currentUserStore.email || "none"}</p>
          </div>
          <form className="flex justify-center flex-col gap-4 w-full max-w-sm" onSubmit={handleSubmit}>
            <input type="text" onChange={handleEmail} placeholder="Correo" />
            <input type="password" onChange={handlePassword} placeholder="Contraseña" />
            <button type="submit" >Entrar</button>
          </form>
          <div className="flex justify-between my-4 w-full max-w-sm">
            <Link to="/user_details">Mi perfil</Link>
            <button onClick={handleSignOut} >Sign Out</button>
          </div>
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default SignIn
