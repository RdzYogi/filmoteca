import React from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'

function Login() {
  return (
  <Layout>
    <Navbar/>
    <div className="pt-40">Login</div>
    <Footer/>
  </Layout>
  )
}

export default Login
