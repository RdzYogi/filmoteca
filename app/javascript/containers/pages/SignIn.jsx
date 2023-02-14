import React, { useState } from "react"
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'


function SignIn() {

  const [user, setUser] = useState({email:"", password:""})
  const [authToken, setAuthToken] = useState("")
  const [currentUser, setCurrentUser] = useState({})

  const handleEmail = (e) => {
    e.preventDefault()
    setUser({...user, email: e.target.value})
  }

  const handlePassword = (e) => {
    e.preventDefault()
    setUser({...user, password: e.target.value})
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const csrfToken = document.querySelector("[name='csrf-token']").content
    const data = {user: user}
    // console.log(data)
    fetch('/users/sign_in', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => {
      // console.log(response)
      if (response.ok) {
        // console.log(response.headers.get('Authorization').split(' ')[1])
        setAuthToken(response.headers.get('Authorization'))
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(json => {
      console.log(json)
      setCurrentUser(json.user)
    })
    .catch(error => {
      // Handle error
    });
  }

  // console.log("auth:",authToken)
  // console.log("user:",currentUser)

  const handleSignOut = (e) => {
    e.preventDefault()
    const csrfToken = document.querySelector("[name='csrf-token']").content
    const data = {user: user}
    // console.log(data)
    fetch('/users/sign_out', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json', "Authorization": authToken},
      // body: JSON.stringify(data)
    })
    .then(response => {
      // console.log(response)
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(json => {
      console.log(json)
    })
    .catch(error => {
      // Handle error
    });
  }


  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 container">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleEmail} placeholder="Correo" />
          <input type="password" onChange={handlePassword} placeholder="Contraseña" />
          <button type="submit" >Entrar</button>
          <button onClick={handleSignOut} >Sign Out</button>

        </form>

      </div>
      <Footer/>
    </Layout>
  )
}

export default SignIn
