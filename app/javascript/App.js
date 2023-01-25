import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from './containers/errors/Error404';
import Admin from './containers/pages/Admin';
import Home from './containers/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* This is the wrong path error route */}
        <Route exact path="*" element={<Error404 />} />


        {/* This is were we define all the path for our pages */}
        <Route exact path="/" element={<Home />} />

        {/* This can only be accessed with a admin user */}
        <Route exact path="/admin" element={<Admin />} />

      </Routes>
    </Router>
  )
}

export default App
