import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import SubscriptionCard from '../../components/shared/SubscriptionCard'
import Layout from '../../hocs/layouts/Layout'

function UserDetails() {
  const currentUserStore = useSelector(state => state.userManager.currentUser)
  const authToken = useSelector(state => state.userManager.userAuth)
  const [subscriptions, setSubscriptions] = useState([])
  // const [reservations, setReservations] = useState([])
  const [loaded, setLoaded] = useState(false)
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
      data.subscriptions.map((subscription, index) => {
        console.log(subscription)
        setSubscriptions(subscriptions => [...subscriptions, <SubscriptionCard key={index} subscription={subscription}/>])
      })
      setLoaded(true)
    });
  }, [])

  return (
  <Layout>
    <Navbar/>
    <div className="pt-40">SUBSCRIPTIONS</div>
    {/* <div className="pt-20">{currentUserStore.email}</div> */}
    <div className="pt-20">
      {loaded ? subscriptions : <div className="text-center">Cargando...</div>}
    </div>
    <div className="pt-40">{authToken}</div>
    <Footer/>
  </Layout>
  )
}

export default UserDetails
