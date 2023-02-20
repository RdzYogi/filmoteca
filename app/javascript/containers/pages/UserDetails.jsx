import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'

function UserDetails() {
  const currentUserStore = useSelector(state => state.userManager.currentUser)
  const authToken = useSelector(state => state.userManager.userAuth)
  useEffect(() => {
    fetch('/api/v1/user_details', {
      method: 'GET',
      headers: {'Content-Type': 'application/json', "Authorization": authToken},
    })
    .then((response) => {
      if (response.ok) {

        return response.json()
      }
    })
    .then((data) => {
      console.log(data)
    });
  }, [])

  return (
  <Layout>
    <Navbar/>
    <div className="pt-40">{currentUserStore.id}</div>
    <div className="pt-40">{authToken}</div>
    <Footer/>
  </Layout>
  )
}

export default UserDetails
