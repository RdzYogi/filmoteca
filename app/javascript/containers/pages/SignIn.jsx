import React, { useState } from "react"
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { userSignOut, userSignIn } from "../../redux/slices/userSlice"
// import SubmitButton from '../../components/shared/SubmitButton';
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
        <div className="flex justify-center">
          <div className="max-w-xs bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-8">
            <div className="text-center mb-6">
              <h1>INGRESO</h1>
              {/* <p>{currentUserStore.email || "none"}</p> */}
            </div>
            <form className="flex justify-center flex-col gap-6 max-w-sm" onSubmit={handleSubmit}>
              <input type="text" onChange={handleEmail} placeholder="Correo" />
              <input type="password" onChange={handlePassword} placeholder="Contraseña" />
              <button type="submit" className="inline-block w-full py-3 px-5 font-medium text-white rounded-sm bg-button-submit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-button-submit" >Entrar</button>
              {/* <div className="flex items-center justify-between">
              <SubmitButton label="Entrar"/>
              <button onClick={handleSignOut} >Sign Out</button>
              </div> */}
            </form>
            <div className="mt-6 text-blue-cycle">
            <Link to="/sign_up">¿Aún no tienes cuenta? Regístrate</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default SignIn
