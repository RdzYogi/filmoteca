import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Error404 from './containers/errors/Error404';
import Admin from './containers/pages/Admin';
import Home from './containers/pages/Home';
import Abonos from './containers/pages/Abonos';
import Calendar from './containers/pages/Calendar';
import Cartelera from './containers/pages/Cartelera';
import Ciclos from './containers/pages/Ciclos';
import Noticias from './containers/pages/Noticias';
import Contacto from './containers/pages/Contacto';
import Login from './containers/pages/Login';
import Cycle from './containers/pages/Cycle';
import Movie from './containers/pages/Movie';
import AdminDB from './containers/pages/AdminDB';
import SignUp from './containers/pages/SignUpLogic';
import SignIn from './containers/pages/SignIn';
import { useSelector, useDispatch } from 'react-redux'
import { resetLocalStorage, isLogged, isAdmin } from "./redux/slices/userSlice"


function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.userManager.userAuth)
  // console.log(token)
  useEffect(() => {
    // Check validity of token on page load
    if (token === "" || token === null) {
      // no user info in local storage
      // reset local storage just in case
      dispatch(resetLocalStorage())

    } else {
      fetch('/users/sign_in', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', "Authorization": token},
      })
      .then(response => {
        if (response.ok) {
          // flag a user as logged in
          dispatch(isLogged())
          return response.json();
        } else {
          // reset local storage
          dispatch(resetLocalStorage())
        }
      })
      .then(json => {
        // check if user is admin
        if (json.user.admin === true) {
          dispatch(isAdmin())
        }
        // console.log(json)
      })
    }
  }, [])

  return (
    <Router >
      <Routes >
        {/* This is the wrong path error route */}
        <Route exact path="*" element={<Error404 />} />


        {/* This is were we define all the path for our pages */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/abonos" element={<Abonos />} />
        <Route exact path="/calendario" element={<Calendar />} />
        <Route exact path="/cartelera" element={<Cartelera />} />
        <Route exact path="/ciclos" element={<Ciclos />} />
        <Route exact path="/noticias" element={<Noticias />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/ciclos/:slug" element={<Cycle />} />
        <Route exact path="/movie" element={<Movie />} />
        {/* <Route exact path="/signup" element={<Signup />} /> */}

        {/* User routes */}
        <Route exact path="/sign_up" element={<SignUp />} />
        <Route exact path="/sign_in" element={<SignIn />} />

        {/* This can only be accessed with a admin user */}
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/admin/db" element={<AdminDB />} />

      </Routes>
    </Router>
  )
}

export default App
