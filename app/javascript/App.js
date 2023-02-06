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
import Movie from './containers/pages/Movie';

function App() {

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
        <Route exact path="/movie" element={<Movie />} />

        {/* This can only be accessed with a admin user */}
        <Route exact path="/admin" element={<Admin />} />

      </Routes>
    </Router>
  )
}

export default App
