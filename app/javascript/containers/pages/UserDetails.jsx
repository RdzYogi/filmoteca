import React, { useEffect, useState } from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'

function UserDetails() {

  const [user, setUser] = useState({})
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    fetch('/api/v1/user_details')
      .then((response) => {
        console.log(response)
        return response.json()})
      .then((data) => console.log(data));
  }, [])

  return (
  <Layout>
    <Navbar/>
    <div className="pt-40">UserDetails</div>
    <Footer/>
  </Layout>
  )
}

export default UserDetails
