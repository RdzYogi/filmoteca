import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* This is the wrong path error route */}
        <Route exact path="*" element={<Error404 />} />


        {/* This is were we define all the path for our pages */}
        <Route exact path="/" element={<Home />} />

      </Routes>
    </Router>
  )
}

export default App
