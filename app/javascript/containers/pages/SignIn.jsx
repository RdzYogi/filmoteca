import React, { useState } from "react"
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { userSignOut, userSignIn } from "../../redux/slices/userSlice"
import SubmitButton from '../../components/shared/SubmitButton';
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
        <div className="flex justify-center items-center flex-col bg-gray-200 shadow-md rounded p-4 mb-4 max-w-sm">
          <div className="text-center my-4">
            <h1>INGRESO</h1>
            {/* <p>{currentUserStore.email || "none"}</p> */}
          </div>
          <form className="flex justify-center flex-col gap-4 w-full max-w-sm" onSubmit={handleSubmit}>
            <input type="text" onChange={handleEmail} placeholder="Correo" />
            <input type="password" onChange={handlePassword} placeholder="Contraseña" />
            {/* <button type="submit" >Entrar</button> */}
            <div className="flex items-center justify-between">
            <SubmitButton label="Entrar"/>
            <button onClick={handleSignOut} >Sign Out</button>
            </div>
          </form>
          <div className="mt-4">
          <Link to="/sign_up">¿Aún no tienes cuenta? Regístrate</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default SignIn
