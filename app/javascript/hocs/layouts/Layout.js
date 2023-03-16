import React from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'

function Layout({ children }) {
  return (
    <div className='min-h-[100vh] flex flex-col justify-between'>
      <Navbar/>
        { children }
      <Footer/>
    </div>
  )
}

export default Layout
