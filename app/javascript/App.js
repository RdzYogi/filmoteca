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
import { useDispatch, useSelector } from 'react-redux'
import { verifyUserToken } from "./redux/slices/userSlice"



function App() {
  const dispatch = useDispatch()
  const auth_token = useSelector(state => state.userManager.userAuth)
  useEffect(() => {
    if (auth_token) {
      dispatch(verifyUserToken())
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
        <Route exact path="/movies/:slug" element={<Movie />} />
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
