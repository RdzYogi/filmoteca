import React, {useEffect, useState} from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import { useParams } from "react-router-dom";
import Seat from "../../components/Halls/Seat"

function Hall() {
  let params = useParams()
  const id = params.id;

  const [hallData, setHallData] = useState({
    hall: {},
    seats: [],
    sessions: []
  })

  useEffect(() => {
    fetch(`/api/v1/halls/${id}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setHallData(data)
    })
  }, [])

  const [seats, setSeats] = useState([])
  useEffect(() => {
    if(hallData.seats.length === undefined) return
    console.log(hallData)
    setSeats(hallData.seats.map(seat => {
      return (
        <Seat row={seat.row} column={seat.column}/>
      )
    }))
    // Object.entries(hallData).map(([key, values]) => {
    //   if (key === "seats") {
    //     key.map(seat => console.log(seat))
    //   }
    // })
    // seats = hallData.seats.map(seat => {
    //   setHallData(hallData => [...hallData[seats], <Seat row={seat.row} column={seat.column} /> ])
    //   // return <Seat row={seat.row} column={seat.column} />
    // })
  }, [hallData])

  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 max-w-7xl mt-6 mb-20 sm:mx-auto md:px-12 sm:px-6 px-4 text-justify">
        <h1 className='text-center text-2xl font-bold'>ASIENTOS</h1>
        <p>Elija sus asientos (Los marcados en verde están disponibles.)</p>

        {seats}
        {/* <p>{hallData.seats[0].row}</p> */}
        {/* {hallData.sessions} */}
        {/* <p>La Sala 1 NO es accesible para público en silla de ruedas.</p>
        <p>No se permitirá la entrada una vez iniciada la función.</p> */}
      </div>
      <Footer/>
    </Layout>
  )
}

export default Hall
