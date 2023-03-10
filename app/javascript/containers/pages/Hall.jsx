import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import { useParams } from "react-router-dom";
import Seat from "../../components/Halls/Seat"
import SubmitButton from '../../components/shared/SubmitButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import Ticket from '../../components/Halls/Ticket';
import getDateObject from '../../components/helpers/getDateObject';

function Hall() {
  let params = useParams()
  const id = params.id;
  const authToken = useSelector(state => state.userManager.userAuth)
  const csrfToken = document.querySelector("[name='csrf-token']").content

  const [movieInfo, setMovieInfo] = useState({})
  const [formatedHall, setFormatedHall] = useState([])
  const [pickedSeats, setPickedSeats] = useState([])

  useEffect(() => {
    fetch(`/api/v1/projections/${id}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json', "Authorization": authToken},
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      // console.log(data)
    // if (Object.keys(projection).length === 0 ) return
    const movie = data.include.movie
    const session = data.include.session
    const hall = data.include.include.hall
    const seats = data.include.include.include.seats
    const reservations = data.include.include.reservations
    setMovieInfo({movie: movie, hall: hall, session: session})

    const lastRow = seats.slice(-1)[0].row
    const lastColumn = seats.slice(-1)[0].column
    const result = []
    let i = lastRow
    let row = []

    //data/row===row dataattributes e.target.data
    // check if can put seat component w attribute row and column
    seats.reverse().forEach((seat, index) => {
      if (seat.row === i+""){
        row.push(<Seat key={index + "row"} row={seat.row} column={seat.column}  handleSeatClick={handleSeatClick}/>)
        if (seat.row === lastRow && seat.column === lastColumn){
          result.push(
            <div key={i + 1 + "column"} className={hall.name === "Sala 1" ? 'flex justify-center' : 'flex' }>
            <div className='self-center'>
              {Number(seat.row) + 1}
            </div>
            <div className='flex'>
              {row.reverse()}
            </div>
          </div>)
        }
      } else {
        if (seat.row < 15) {
          const firstHalfRow = row.reverse().slice(0, row.length/2)
          const secondHalfRow = row.slice(-row.length/2)
          result.push(
            <div key={i + "column"} className={hall.name === "Sala 1" ? 'flex justify-center' : 'flex' }>
              <div className='self-center'>
                {Number(seat.row) < 9 ? "0" + (Number(seat.row) + 1) : Number(seat.row) + 1}
              </div>
              {
                hall.name === "Sala 1" ?
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

          row.push(<Seat key={index + "row"} row={seat.row} column={seat.column}  handleSeatClick={handleSeatClick}/>)
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

          row.push(<Seat key={index + "row"} row={seat.row} column={seat.column}  handleSeatClick={handleSeatClick}/>)
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

          row.push(<Seat key={index + "row"} row={seat.row} column={seat.column}  handleSeatClick={handleSeatClick}/>)
          i -= 1
        }
      }
    })
    setFormatedHall(result)
  })
}, [])

const handleSeatClick = (e) => {
  const row = e.target.dataset.row
  const column = e.target.dataset.column
  const selectedSeatsContainer = document.getElementById('selected-seats-container')
  const selectedSeats = selectedSeatsContainer.childNodes
  if (selectedSeats.length === 0){
    setPickedSeats(prevPickedSeats => [...prevPickedSeats,
      <div key={row+column} data-row={row} data-column={column} className='bg-black text-white p-2'>
        <p>Asiento elegido:</p>
        <div className='flex'>
          <p>Fila {row}</p>
          <p className='mx-2'>-</p>
          <p>Asiento {column}</p>
        </div>
        {/* <p>Precio: {props.price}???</p> */}
        <p>abono</p>
      </div>
    ])
  } else {
    let exists = false
    for (let i = 0; i < selectedSeats.length; i++) {
      if (selectedSeats[i].dataset.row === row && selectedSeats[i].dataset.column === column){
        setPickedSeats([])
        exists = true
        for (let j = 0; j < selectedSeats.length; j++) {
          if (selectedSeats[j] !== selectedSeats[i]){
            setPickedSeats(prevPickedSeats => [...prevPickedSeats,
              <div key={selectedSeats[j].dataset.row+selectedSeats[j].dataset.column} data-row={selectedSeats[j].dataset.row} data-column={selectedSeats[j].dataset.column} className='bg-black text-white p-2'>
                <p>Asiento elegido:</p>
                <div className='flex'>
                  <p>Fila {selectedSeats[j].dataset.row}</p>
                  <p className='mx-2'>-</p>
                  <p>Asiento {selectedSeats[j].dataset.column}</p>
                </div>
                {/* <p>Precio: {props.price}???</p> */}
                <p>abono</p>
              </div>
            ])
          }
        }
        break
      }
    }
    if (!exists){
      setPickedSeats(prevPickedSeats => [...prevPickedSeats,
        <div key={row+column} data-row={row} data-column={column} className='bg-black text-white p-2'>
        <p>Asiento elegido:</p>
        <div className='flex'>
          <p>Fila {row}</p>
          <p className='mx-2'>-</p>
          <p>Asiento {column}</p>
        </div>
        {/* <p>Precio: {props.price}???</p> */}
        <p>abono</p>
      </div>
      ])
    }
  }
}

const handleCreate = () => {
  // retireve parent w id fget its children map push into newSeats array and extract all datatags which has seat
  // reservations array of multiple seats id or rows and columns
  // console.log(newReservation)

    fetch('/api/v1/reservations', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Authorization": authToken,
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify({reservationinfo: {seats: newSeats, projection_id: id}})
    })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
    })
    .catch((err) => {
      // console.log(err.message)
    })
  }

  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 max-w-7xl mt-6 mb-20 sm:mx-auto md:px-12 sm:px-6 px-4 text-justify">
        <h1 className='text-center text-2xl font-bold'>ASIENTOS</h1>
        <p>Elija sus asientos (Los marcados en verde est??n disponibles.)</p>
        <div className='flex'>
          <div className='my-10 flex-1'>
            {formatedHall}
            <p className='text-2xl text-center mt-5'>ESCENARIO</p>
          </div>
          <div id='selected-seats-container'>
            {pickedSeats}
          </div>

          {/* {(Object.keys(wantedReservations).length === 0 ) ? '' :
            <div className='my-10 bg-slate-300 p-5'>
              <p className='text-center underline text-lg'>En tu carrito</p>
              <div className='flex'>
                <p>{getDateObject(movieInfo.session.play_time).day}/{getDateObject(movieInfo.session.play_time).month}/{getDateObject(movieInfo.session.play_time).year}</p>
                <p className='mx-2'>-</p>
                <p>{getDateObject(movieInfo.session.play_time).hour}:{getDateObject(movieInfo.session.play_time).minutes}h</p>
                <p className='mx-2'>-</p>
                <p>{movieInfo.hall.name}</p>
              </div>
              <p className='font-bold'>{movieInfo.movie.title}</p>
              <p>Total entradas: {wantedReservations.length}</p>
              <p>Total precio: ???</p>
              <SubmitButton label="Comprar" onClick={handleCreate}/>
            </div>
          } */}
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faCircleExclamation} />
            <p className='ml-2'>La Sala 1 NO es accesible para p??blico en silla de ruedas.</p>
          </div>
          <div className='flex items-center mb-5'>
            <FontAwesomeIcon icon={faTriangleExclamation} />
            <p className='ml-2'>No se permitir?? la entrada una vez iniciada la funci??n.</p>
          </div>
        </div>
        <Footer/>
    </Layout>
  )
}

export default Hall
