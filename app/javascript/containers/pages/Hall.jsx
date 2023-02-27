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
    setSeats(hallData.seats.map((seat, index) => {
      return (
        <Seat key={index} row={Number(seat.row)+1} column={Number(seat.column)+1}/>
      )
    }))
  }, [hallData])

  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 max-w-7xl mt-6 mb-20 sm:mx-auto md:px-12 sm:px-6 px-4 text-justify">
        <h1 className='text-center text-2xl font-bold'>ASIENTOS</h1>
        <p>Elija sus asientos (Los marcados en verde están disponibles.)</p>
        <p>{hallData.hall.name}</p>
        {/* totally wrong seat rows and cols  */}
        {/* {hallData.hall.name === "Sala 1" &&
          <div className='flex flex-col-reverse'>
            <div className='flex'>
              <p className='self-center mr-10'>0001</p>
              {seats.slice(0,17)}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0002</p>
              {seats.slice(18,35)}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0003</p>
              {seats.slice(36,53)}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0004</p>
              {seats.slice(54,71)}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0005</p>
              {seats.slice(72,89)}
            </div>
            <br />
            <div className='flex'>
              <p className='self-center mr-10'>0006</p>
              {seats.slice(90,100)}
            </div>
          </div>
        } */}
         {/* totally wrong seat rows and cols  */}
        {/* {hallData.hall.name === "Sala 2" &&
          <div className='flex flex-col-reverse'>
            <div className='flex'>
              <p className='self-center mr-10'>0001</p>
              {seats.slice(0,9)}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0002</p>
              {seats.slice(9,19)}
            </div>
            <div className='flex'>
            <p className='self-center mr-10'>0003</p>
              {seats.slice(19,20)}
            </div>
            <div className='flex'>
            <p className='self-center mr-10'>0004</p>
              {seats.slice(20,44)}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0005</p>
              {seats.slice(45,57)}
            </div>
            <div className='flex'>
            <p className='self-center mr-10'>0006</p>
              {seats.slice(68,70)}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0007</p>
              {seats.slice(77,88)}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0008</p>
              {seats.slice(89,99)}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0009</p>
              {seats.slice(100,110)}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0010</p>
              {seats.slice(111,120)}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0011</p>
              {seats.slice(121,129)}
            </div>
          </div>
        } */}

        {/* {hallData.sessions} */}
        {/* <p>La Sala 1 NO es accesible para público en silla de ruedas.</p>
        <p>No se permitirá la entrada una vez iniciada la función.</p> */}
      </div>
      <Footer/>
    </Layout>
  )
}

export default Hall
