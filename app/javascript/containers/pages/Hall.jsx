import React, {useEffect, useState} from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import { useParams } from "react-router-dom";
import Seat from "../../components/Halls/Seat"
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';
import SubmitButton from '../../components/shared/SubmitButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

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
      const getInfo = () => {
        console.log(seat.row, seat.column)
      }
      if (seat.row === i+""){
        // console.log("trigger for seat", seat.row)
        row.push(<Seat key={index + "row"} getInfo={getInfo}/>)
        if (seat.row === lastRow && seat.column === lastColumn){
          result.push(
          <div key={i + 1 + "column"} className={hallData.hall.name === "Sala 1" ? 'flex justify-center' : 'flex' }>
            <div className='self-center'>
              {Number(seat.row) + 1}
            </div>
            <div className='flex'>
              {row.reverse()}
            </div>
          </div>)
        }
      } else {
        // console.log("else triggered for seat", seat.row)
        if (seat.row < 15) {
          const firstHalfRow = row.reverse().slice(0, row.length/2)
          const secondHalfRow = row.slice(-row.length/2)
          result.push(
            <div key={i + "column"} className={hallData.hall.name === "Sala 1" ? 'flex justify-center' : 'flex' }>
              <div className='self-center'>
                {Number(seat.row) < 9 ? "0" + (Number(seat.row) + 1) : Number(seat.row) + 1}
              </div>
              {
                hallData.hall.name === "Sala 1" ?
              <div className='flex'>
                <div className='mr-4'>
                  {firstHalfRow}
                </div>
                <div className='flex justify-end ml-4'>
                  {secondHalfRow}
                </div>
              </div>
              :
              <div className='flex'>
                {row.reverse()}
              </div>
              }
            </div>
          )
          row = []

          row.push(<Seat key={index + "row"} getInfo={getInfo}/>)
          i -= 1
        } else if (seat.row == 15) {
          result.push(
            <div key={i + "column"} className='flex justify-center'>
              <div className='pt-1 self-start'>
                {Number(seat.row) + 1}
              </div>
              <div className='flex mb-6'>
                {row.reverse()}
              </div>
            </div>)
          row = []

          row.push(<Seat key={index + "row"} getInfo={getInfo}/>)
          i -= 1
        } else {
          result.push(
            <div key={i + "column"} className='flex justify-center'>
              <div className='self-center'>
                {Number(seat.row) + 1}
              </div>
              <div className='flex'>
                {row.reverse()}
              </div>
            </div>)
          row = []

          row.push(<Seat key={index + "row"} getInfo={getInfo}/>)
          i -= 1
        }
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
        <div className='my-10'>
          {formatedHall}
          <p className='text-2xl text-center mt-5'>ESCENARIO</p>
        </div>
        <div className='flex items-center'>
          <FontAwesomeIcon icon={faCircleExclamation} />
          <p className='ml-2'>La Sala 1 NO es accesible para público en silla de ruedas.</p>
        </div>
        <div className='flex items-center mb-5'>
          <FontAwesomeIcon icon={faTriangleExclamation} />
          <p className='ml-2'>No se permitirá la entrada una vez iniciada la función.</p>
        </div>
        <SubmitButton label="Siguiente"/>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Hall
