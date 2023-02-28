import React, {useEffect, useState} from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import { useParams } from "react-router-dom";
import Seat from "../../components/Halls/Seat"
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';

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
  const [formatedHall, setFormatedHall] = useState([])

  useEffect(() => {
    if (hallData.seats.length === 0) return
    // console.log(hallData.seats)
    const lastRow = hallData.seats.slice(-1)[0].row
    console.log(hallData.seats)
    const lastColumn = hallData.seats.slice(-1)[0].column
    const result = []
    let i = lastRow
    let row = []

    hallData.seats.reverse().forEach((seat, index) => {
      // console.log(seat.row)

      if (seat.row === i+""){
        console.log("trigger for seat", seat.row)
        row.push(<div key={index + "row"} className='w-2 h-2 bg-black m-5'></div>)
        if (seat.row === lastRow && seat.column === lastColumn){
          result.push(<div key={i + 1 + "column"} className='flex'><div>{Number(seat.row) + 1}</div><div className='flex'>{row}</div></div>)
        }
      } else {
        console.log("else triggered for seat", seat.row)
        result.push(<div key={i + "column"} className='flex'><div>{Number(seat.row) + 1}</div><div className='flex'>{row}</div></div>)
        row = []

        row.push(<div key={index + "row"} className='w-2 h-2 bg-black m-5'></div>)
        i -= 1
      }
    })
    setFormatedHall(result)
  }, [hallData])


  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 max-w-7xl mt-6 mb-20 sm:mx-auto md:px-12 sm:px-6 px-4 text-justify">
        <h1 className='text-center text-2xl font-bold'>ASIENTOS</h1>
        <p>Elija sus asientos (Los marcados en verde están disponibles.)</p>
        <p>{hallData.hall.name}</p>
        {formatedHall}
        <p>ESCENARIO</p>
        <p>La Sala 1 NO es accesible para público en silla de ruedas.</p>
        <p>No se permitirá la entrada una vez iniciada la función.</p>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Hall
