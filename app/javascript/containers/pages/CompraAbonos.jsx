import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Layout from '../../hocs/layouts/Layout'

function CompraAbonos() {
  const params = useParams()
  const [abono, setAbono] = useState("")
  const authToken = useSelector(state => state.userManager.userAuth)
  useEffect(() => {
    let i=0
    if(params.t === "ANUAL") i=1
    let j=0
    if(params.d === "true") j=2
    const select = document.getElementById("abono")
    select.selectedIndex = i+j
    setAbono(select.value)

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
      // if (data.subscriptions ) {
      //   // data.subscriptions.map((subscription, index) => {
      //   //   setSubscriptions(subscriptions => [...subscriptions, <SubscriptionCard key={index} subscription={subscription}/>])
      //   // })
      // }
    })

  }, [])
  const handleChange = (e) => {
    setAbono(e.target.value)
  }
  const handleClick = (e) => {
    e.preventDefault()
    const dataToSend = {abono_details:{type: abono}}
    fetch('/api/v1/user_details', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', "Authorization": authToken},
      body: JSON.stringify(dataToSend)
    })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    }
    )
    .then((data) => {
      console.log(data)
    })
  }
  return (
    <Layout>
    <div className="pt-40 pb-20">
      <h1 className='text-center text-2xl font-bold'>COMPRA ABONO</h1>
      <form className='w-1/2 mx-auto flex flex-col'>
        <label htmlFor="abono" className="block mb-2 font-medium text-black">Tipo de abono</label>
          <select onChange={handleChange} id="abono" className="block p-3 w-full text-black bg-form-bg rounded-sm border border-form-border shadow-sm focus:ring-black focus:border-black" >
            <option value="abono10N">Abono 10                   -20€</option>
            <option value="abonoAN"> Abono anual                -40€</option>
            <option value="abono10D"> Abono 10 con descuento     -15€</option>
            <option value="abonoAD">  Abono anual con descuento  -30€</option>
          </select>
          <button onClick={handleClick} className='mt-10 w-fit px-2 bg-black text-white self-center'>Comprar</button>
      </form>

    </div>
  </Layout>
  )
}

export default CompraAbonos
