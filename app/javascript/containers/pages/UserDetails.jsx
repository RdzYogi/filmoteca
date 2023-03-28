import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SubscriptionCard from '../../components/shared/SubscriptionCard'
import ReservationCard from '../../components/shared/ReservationCard'
import Layout from '../../hocs/layouts/Layout'

function UserDetails() {
  const authToken = useSelector(state => state.userManager.userAuth)
  const [subscriptions, setSubscriptions] = useState([])
  const [reservations, setReservations] = useState([])
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
      console.log(data)
      if (data.subscriptions.length === 0 ) {
        setSubscriptions(<div className="text-center">No tienes suscripciones</div>)
      } else {
        data.subscriptions.map((subscription, index) => {
          setSubscriptions(subscriptions => [...subscriptions, <SubscriptionCard key={index} subscription={subscription}/>])
        })
      }
      if (data.reservations.length === 0) {
        setReservations(<div className="text-center mb-5">No tienes reservas</div>)
      } else {
        data.reservations.map((reservation, index) => {
          setReservations(reservations => [...reservations, <ReservationCard key={index} reservation={reservation}/>])
        })
      }
      setLoaded(true)
    });
  }, [])

  return (
  <Layout>
    <div className="pt-40 mx-auto max-w-7xl">
      <div className="flex justify-center">
              <h1 className="text-xl font-bold text-center">SUSCRIPCIONES</h1>
      </div>
      {/* <div className="pt-20">{currentUserStore.email}</div> */}
      <div className="mt-10 p-10 bg-black text-gray-50">
        {loaded ? subscriptions : <div className="text-center">Cargando...</div>}
      </div>
      {/* <div className="pt-40">{authToken}</div> */}
      <div className="flex justify-center pt-10">
              <h1 className="text-xl font-bold text-center">RESERVAS</h1>
      </div>
      <div className="pt-10">
        {loaded ? reservations : <div className="text-center">Cargando...</div>}
      </div>
    </div>
  </Layout>
  )
}

export default UserDetails
