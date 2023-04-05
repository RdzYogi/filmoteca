import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Layout from '../../hocs/layouts/Layout'
import getDateObject from '../../components/helpers/getDateObject'
import PopUp from '../../components/shared/PopUp'

function CompraAbonos() {
  const params = useParams()
  const [abono, setAbono] = useState("")
  const [currentSubscription, setCurrentSubscription] = useState("")
  const [responseStatus, setResponseStatus] = useState("")
  const [popUp, setPopUp] = useState([""])
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
      // console.log(data)
      if (data.subscriptions === undefined) return
      if (data.subscriptions.length > 0) {
        const button = document.getElementById("buy-abono")
        button.disabled = true
        button.style.backgroundColor = "gray"
      }
      data.subscriptions.map((subscription, index) => {
        // console.log(subscription.tipo.split("no")[1])
        let annual = false
        let startDate, endDate
        if (subscription.tipo.split("no")[1] === "") annual = true
        if (annual){
          startDate = getDateObject(subscription.start_date)
          endDate = getDateObject(subscription.end_date)
        }
        setCurrentSubscription(prev => [...prev,
          <div key={index} className="flex flex-col w-fit mx-auto text-left">
            <p className="text-black font-bold">Tipo de abono: {annual? "Abono anual":" Abono 10"}</p>
            {annual ?
              <>
                <p className="text-black font-bold">Fecha de inicio: { startDate.day + "-" + startDate.month +"-"+startDate.year }</p>
                <p className="text-black font-bold">Fecha de fin: {endDate.day + "-" + endDate.month +"-"+endDate.year}</p>
              </>
            :
              <p className="text-black font-bold">Usos restantes: {subscription.remaining_uses}</p>
            }
          </div>
        ])
      })

    })

  }, [])
  const handleChange = (e) => {
    setAbono(e.target.value)
  }
  const handleClick = (e) => {
    e.preventDefault()
    const select = document.getElementById("abono")
    const dataToSend = {abono_details:{type: select.value}}
    fetch('/api/v1/user_details', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', "Authorization": authToken},
      body: JSON.stringify(dataToSend)
    })
    .then((response) => {
      if (response.ok) {
        // console.log(response)
        setResponseStatus(response.statusText)
        setPopUp(["compra"])
        return response.json()
      }
    }
    )
    .then((data) => {
      // console.log(data.status)
    })
  }
  return (
    <Layout>
    <div className="pt-40 pb-20">
      <PopUp status={popUp} responseStatus={responseStatus} />
      <h1 className='text-center text-2xl font-bold'>COMPRA ABONO</h1>
      {
        currentSubscription.length > 0 &&
        <div className="flex flex-col">
          <h2 className="text-center text-2xl font-bold">Usted ya tiene un abono</h2>
          {currentSubscription}
        </div>
      }
      <form className='w-1/2 mx-auto flex flex-col'>
        <label htmlFor="abono" className="block mb-2 font-medium text-black">Tipo de abono</label>
          <select onChange={handleChange} id="abono" className="block p-3 w-full text-black bg-form-bg rounded-sm border border-form-border shadow-sm focus:ring-black focus:border-black" >
            <option value="abono10N">Abono 10                   -20€</option>
            <option value="abonoAN"> Abono anual                -40€</option>
            <option value="abono10D"> Abono 10 con descuento     -15€</option>
            <option value="abonoAD">  Abono anual con descuento  -30€</option>
          </select>
          <button id="buy-abono" onClick={handleClick} className='mt-10 w-fit px-2 bg-black text-white self-center'>Comprar</button>
      </form>

    </div>
  </Layout>
  )
}

export default CompraAbonos
