import React, { useState } from "react"
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'


function SignUp() {

  const [user, setUser] = useState({email:"", password:"", password_confirmation:""})

  const handleEmail = (e) => {
    e.preventDefault()
    setUser({...user, email: e.target.value})
  }

  const handlePassword = (e) => {
    e.preventDefault()
    setUser({...user, password: e.target.value})
  }
  const handlePasswordConfirmation = (e) => {
    e.preventDefault()
    setUser({...user, password_confirmation: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const csrfToken = document.querySelector("[name='csrf-token']").content
    const data = {user: user}
    // console.log(data)
    fetch('/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',"X-CSRF-Token": csrfToken},
      body: JSON.stringify(data)
    })
    .then(response => {
      console.log(response)
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(json => {
      console.log(json)
      // const authenticityToken = json.authenticity_token;
      // localStorage.setItem('authenticityToken', authenticityToken);
      // console.log(authenticityToken)
    })
    .catch(error => {
      // Handle error
    });
  }

  // console.log(user)

  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 container">
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
