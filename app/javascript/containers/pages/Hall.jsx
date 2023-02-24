import React, {useEffect, useState} from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import { useParams } from "react-router-dom";

function Hall() {
  let params = useParams()
  const id = params.id;

  const [hallData, setHallData] = useState({})

  useEffect(() => {
    fetch(`/api/v1/halls/${id}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setHallData(data)
    })
  }, [])
console.log(hallData.seats)

  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 max-w-7xl mt-6 mb-20 sm:mx-auto md:px-12 sm:px-6 px-4 text-justify">
        <h1 className='text-center text-2xl font-bold'>ASIENTOS</h1>
        <p>Elija sus asientos (Los marcados en verde están disponibles.)</p>
        <p>{hallData.name}</p>
        {/* {hallData.seats.map(seat => {
          <p>{seat.row}</p>
        })} */}
        {/* {hallData.sessions} */}

        {/* <p>La Sala 1 NO es accesible para público en silla de ruedas.</p>
        <p>No se permitirá la entrada una vez iniciada la función.</p> */}
      </div>
      <Footer/>
    </Layout>
  )
}

export default Hall
