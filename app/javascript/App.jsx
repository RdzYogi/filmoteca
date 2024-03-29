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
import UserDetails from './containers/pages/UserDetails';
import Cycle from './containers/pages/Cycle';
import Movie from './containers/pages/Movie';
import AdminDB from './containers/pages/AdminDB';
import SignUp from './containers/pages/SignUpLogic';
import SignIn from './containers/pages/SignIn';
import { useDispatch, useSelector } from 'react-redux'
import { verifyUserToken } from "./redux/slices/userSlice"
import Hall from './containers/pages/Hall';
import { fetchCyclesData, fetchMoviesData } from './redux/slices/dataSlice';
import Protected from './routes/Protected';
import ProtectedAdmin from './routes/ProtectedAdmin';
import AdminMsg from './containers/pages/AdminMsg';
import CompraAbonos from './containers/pages/CompraAbonos';



function App() {
  const dispatch = useDispatch()
  const auth_token = useSelector(state => state.userManager.userAuth)
  useEffect(() => {
    if (auth_token) {
      dispatch(verifyUserToken())
    }
    dispatch(fetchMoviesData())
    dispatch(fetchCyclesData())
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
        <Route exact path="/ciclos/:slug" element={<Cycle />} />
        <Route exact path="/movies/:slug" element={<Movie />} />
        {/* <Route exact path="/signup" element={<Signup />} /> */}

        {/* User routes */}
        <Route exact path="/sign_up" element={<SignUp />} />
        <Route exact path="/sign_in" element={<SignIn />} />

        {/* Protected routes, You need to be signed in to view these  */}
        <Route exact path="/projections/:id" element={
          <Protected>
            <Hall />
          </Protected>
        } />
        <Route exact path="/user_details" element={
          <Protected>
            <UserDetails />
          </Protected>
        } />
        <Route exact path="/compra_abono/:t?/:d?" element={
          <Protected>
            <CompraAbonos/>
          </Protected>
        } />


        {/* This can only be accessed with a admin user */}
        <Route exact path="/admin/file" element={
          <ProtectedAdmin>
            <Admin />
          </ProtectedAdmin>
          } />
        <Route exact path="/admin/db" element={
          <ProtectedAdmin>
            <AdminDB />
          </ProtectedAdmin>
          } />
        <Route exact path="/admin/msg" element={
          <ProtectedAdmin>
            <AdminMsg />
          </ProtectedAdmin>
          } />


      </Routes>
    </Router>
  )
}

export default App
