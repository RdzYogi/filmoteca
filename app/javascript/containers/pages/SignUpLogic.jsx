import React, { useState } from "react"
import Layout from '../../hocs/layouts/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { userSignUp } from "../../redux/slices/userSlice"
import { useNavigate } from "react-router-dom"


function SignUp() {

  const [userFormData, setUserFormData] = useState({email:"", password:"", password_confirmation:""})
  const dispatch = useDispatch()
  const currentUserStore = useSelector(state => state.userManager.currentUser)


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

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO basic validations
    dispatch(userSignUp(userFormData))
    .then(
      (response) => {
        if (response.payload.authToken !== "") {
          navigate("/")
        }
      }
    )
  }


  return (
    <Layout>
      <div className="pt-40 flex justify-center mx-auto">
        <div className="bg-gray-200 shadow-md rounded px-4 pt-6 pb-8 mb-8">
          <div className="text-center mb-6">
            <h1>REGISTRO</h1>
          </div>
          <form className="flex justify-center flex-col gap-6 w-80" onSubmit={handleSubmit}>
            <input type="text" onChange={handleEmail} placeholder="Correo" />
            <input type="password" onChange={handlePassword} placeholder="Contraseña" />
            <input type="password" onChange={handlePasswordConfirmation} placeholder="Confirmar contraseña" />
            <button type="submit" className="inline-block w-full py-3 px-5 font-medium text-white rounded-sm bg-button-submit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-button-submit" >Registrarse</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp
