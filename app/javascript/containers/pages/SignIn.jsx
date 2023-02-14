import React, { useState } from "react"
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAuth, setCurrentUser, resetLocalStorage } from "../../redux/slices/userSlice"


function SignIn() {

  const [user, setUser] = useState({email:"", password:""})
  const [authToken, setAuthToken] = useState("")
  // const [currentUser, setCurrentUser] = useState({})

  const currentUserStore = useSelector(state => state.userManager.currentUser)
  const dispatch = useDispatch()

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
        dispatch(setUserAuth(response.headers.get('Authorization')))
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(json => {
      dispatch(setCurrentUser(json.user))
    })
    .catch(error => {
    });
  }

  const handleSignOut = (e) => {
    e.preventDefault()
    fetch('/users/sign_out', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json', "Authorization": authToken},
    })
    .then(response => {
      if (response.ok) {
        dispatch(resetLocalStorage())
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
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
