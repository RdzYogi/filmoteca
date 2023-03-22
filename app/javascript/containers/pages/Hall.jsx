import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../hocs/layouts/Layout'
import { useParams } from "react-router-dom";
import Seat from "../../components/Halls/Seat"
import SubmitButton from '../../components/shared/SubmitButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import getDateObject from '../../components/helpers/getDateObject';
import PopUp from '../../components/shared/PopUp';
import { useNavigate } from 'react-router-dom'

function Hall() {
  let params = useParams()
  const id = params.id;
  const csrfToken = document.querySelector("[name='csrf-token']").content
  const authToken = useSelector(state => state.userManager.userAuth)
  const navigate = useNavigate()

  const [status, setStatus] = useState([])
  const [responseStatus, setResponseStatus] = useState('')

  const [previousReservations, setPreviousReservations] = useState([])
  const [movieInfo, setMovieInfo] = useState({})
  const [formatedHall, setFormatedHall] = useState([])
  const [pickedSeats, setPickedSeats] = useState([])
  const [hallAllSeats, setHallAllSeats] = useState([])

  useEffect(() => {
    fetch(`/api/v1/projections/${id}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json', "Authorization": authToken},
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const movie = data.include.movie
      const session = data.include.session
      const hall = data.include.include.hall
      const seats = data.include.include.include.seats
      const reservations = data.include.include.reservations
      setMovieInfo({movie: movie, hall: hall, session: session})
      setHallAllSeats(seats)
      setPreviousReservations(reservations)

      const lastRow = seats.slice(-1)[0].row
      const lastColumn = seats.slice(-1)[0].column
      const result = []
      let i = +lastRow
      let row = []

    seats.reverse().forEach((seat, index) => {
      // console.log(seat.column)
      if (seat.row === i+""){
        // console.log(seat.row, seat.column)
        // create row
        row.push(<Seat id={seat.id} reservations={reservations} key={index + "row"} row={seat.row} column={seat.column} handleSeatClick={handleSeatClick} />)
        // console.log(row)
        const firstHalfRow = row.reverse().slice(0, row.length/2)
        const secondHalfRow = row.slice(-row.length/2)
        // pushing last row
        if (seat.row === '0' && seat.column === '0'){
          result.push(
            <div key={i + 1 + "column"} className={hall.name === "Sala 1" ? 'flex justify-center' : 'flex' }>
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
          </div>)
        }
      } else {
        if (seat.row < 14) {
          const firstHalfRow = row.reverse().slice(0, row.length/2)
          const secondHalfRow = row.slice(-row.length/2)

          // console.log(firstHalfRow,secondHalfRow)
          result.push(
            <div key={i +row+ "column"} className={hall.name === "Sala 1" ? 'flex justify-center' : 'flex' }>
              <div className='self-center'>
                {Number(seat.row) < 8 ? "0" + (Number(seat.row) + 2) : Number(seat.row) + 2}
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
                {row}
              </div>
              }
            </div>
          )
          row = []

          row.push(<Seat id={seat.id} reservations={reservations} key={index + "row"} row={seat.row} column={seat.column} handleSeatClick={handleSeatClick}/>)
          i -= 1

        } else if (seat.row === 14) {
          result.push(
            <div key={i + "column"} className='flex justify-center'>
              <div className='pt-1 self-start'>
                {Number(seat.row) + 2}
              </div>
              <div className='flex mb-6'>
                {row.reverse()}
              </div>
            </div>)
          row = []

          row.push(<Seat id={seat.id} reservations={reservations} key={index + "row"} row={seat.row} column={seat.column}  handleSeatClick={handleSeatClick}/>)
          i -= 1
        } else {
          result.push(
            <div key={i + "column"} className='flex justify-center'>
              <div className='self-center'>
                {Number(seat.row) + 2}
              </div>
              <div className='flex'>
                {row.reverse()}
              </div>
            </div>)
          row = []

          row.push(<Seat id={seat.id} reservations={reservations} key={index + "row"} row={seat.row} column={seat.column}  handleSeatClick={handleSeatClick}/>)
          i -= 1
        }
      }
    })
    setFormatedHall(result)
  })
}, [])

const [selectedSeatPrices, setSelectedSeatPrices] = useState([]);
const [selectedSeatPrice, setSelectedSeatPrice] = useState('');

const handlePriceSelection = (e) => {
  setSelectedSeatPrice(event.target.value)
  setSelectedSeatPrices(prevSelectedPrice => [...prevSelectedPrice, +e.target.value ]);
}

const handleSeatClick = (e) => {
  // console.log(e)
  const row = e.target.dataset.row
  const column = e.target.dataset.column
  const selectedSeatsContainer = document.getElementById('selected-seats-container')
  const selectedSeats = selectedSeatsContainer.childNodes
  if (selectedSeats.length === 0){
    setPickedSeats(prevPickedSeats => [...prevPickedSeats,
      <div key={row+column} data-price={selectedSeatPrice} data-row={row} data-column={column} className='bg-black text-white p-2'>
        <p>Asiento elegido:</p>
        <div className='flex'>
          <p>Fila {row}</p>
          <p className='mx-2'>-</p>
          <p>Asiento {column}</p>
        </div>
        <label htmlFor={'price'+row+column} className="block mb-2 font-medium">Precio</label>
        <select id={'price'+row+column} onChange={handlePriceSelection} className="block p-3 w-full text-black bg-form-bg rounded-sm border border-form-border shadow-sm focus:ring-black focus:border-black" required>
          <option defaultValue>Elige forma de pago</option>
          <option value="3">Entrada sencilla - 3€</option>
          <option value="0">Abono anual</option>
          <option value="0">Abono 10</option>
          <option value="2">Entrada sencilla descuento - 2€</option>
          <option value="0">Abono anual descuento</option>
          <option value="0">Abono 10 descuento</option>
        </select>
      </div>
    ])
  } else {
    let exists = false
    for (let i = 0; i < selectedSeats.length; i++) {
      if (selectedSeats[i].dataset.row === row && selectedSeats[i].dataset.column === column){
        setPickedSeats([])
        setSelectedSeatPrices([])
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
                <label htmlFor={'price'+row+column} className="block mb-2 font-medium ">Precio</label>
                <select id={'price'+row+column} onChange={handlePriceSelection} className="block p-3 w-full text-black bg-form-bg rounded-sm border border-form-border shadow-sm focus:ring-black focus:border-black" required>
                  <option defaultValue>Elige forma de pago</option>
                  <option value="3">Entrada sencilla - 3€</option>
                  <option value="0">Abono anual</option>
                  <option value="0">Abono 10</option>
                  <option value="2">Entrada sencilla descuento - 2€</option>
                  <option value="0">Abono anual descuento</option>
                  <option value="0">Abono 10 descuento</option>
                </select>
              </div>
            ])
          const childnodes = selectedSeats[j].childNodes
          for (let i = 0; i < childnodes.length; i++) {
            if (childnodes[i].nodeName === "SELECT" && childnodes[i].value !== 'Elige forma de pago') {
              setSelectedSeatPrices(prev => [...prev, +childnodes[i].value])
            }
          }
          // console.log(selectedSeats[j])
          }
        }
        break
      }
    }
    if (!exists){
      setPickedSeats(prevPickedSeats => [...prevPickedSeats,
        <div key={row+column} data-price={selectedSeatPrice} data-row={row} data-column={column} className='bg-black text-white p-2'>
        <p>Asiento elegido:</p>
        <div className='flex'>
          <p>Fila {row}</p>
          <p className='mx-2'>-</p>
          <p>Asiento {column}</p>
        </div>
        <label htmlFor={'price'+row+column} className="block mb-2 font-medium">Precio</label>
        <select id={'price'+row+column} onChange={handlePriceSelection} className="block p-3 w-full text-black bg-form-bg rounded-sm border border-form-border shadow-sm focus:ring-black focus:border-black" required>
          <option defaultValue>Elige forma de pago</option>
          <option value="3">Entrada sencilla - 3€</option>
          <option value="0">Abono anual</option>
          <option value="0">Abono 10</option>
          <option value="2">Entrada sencilla descuento - 2€</option>
          <option value="0">Abono anual descuento</option>
          <option value="0">Abono 10 descuento</option>
        </select>
      </div>
      ])
    }
  }
}
const handleCreate = () => {
  // const error = []
  // if(error.length > 0){
  //   setStatus(error)
  //   return
  // }

  let newSeats = []
  const parent = document.getElementById('selected-seats-container')
  parent.childNodes.forEach(child => {
    const newSeatRow = child.getAttribute('data-row')
    const newSeatColumn = child.getAttribute('data-column')
    hallAllSeats.filter(seat => {
      if (seat.row === newSeatRow && seat.column === newSeatColumn){
        newSeats.push(seat)
      }
    })
  })

    fetch('/api/v1/reservations', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        'X-CSRF-Token': csrfToken,
        "Authorization": authToken
      },
      body: JSON.stringify({reservationinfo: {seats: newSeats, projection_id: id}})
    })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Network response was not ok.")
    })
    .then((response) => {
      // console.log(data)
      console.log(response)
      // <PopUp status={[response.message]} responseStatus='Created' />
      // setStatus([response.message])
      // setResponseStatus('Created')
      alert("You purchase was successful")
      navigate('/')
    })
    .catch((err) => {
      // setStatus([err])
      // setResponseStatus('Error')
      // console.log(err.message)
      alert("We are sorry, someone else has bought your chosen seat(s)")
    })
  }

  return (
    <Layout>
      <div className="pt-40 max-w-7xl mt-6 mb-20 sm:mx-auto md:px-12 sm:px-6 px-4 text-justify">
        <h1 className='text-center text-2xl font-bold'>ASIENTOS</h1>
        <p>Elija sus asientos (Los marcados en verde están disponibles.)</p>
        <div className='flex'>
          <div className='my-10 flex-1'>
            {formatedHall}
            <p className='text-2xl text-center mt-5'>ESCENARIO</p>
          </div>
          <div>
            {(Object.keys(pickedSeats).length === 0 ) ? '' :
              <div className='mt-10 bg-slate-300 p-5'>
                <p className='text-center underline text-lg'>En tu carrito</p>
                <div className='flex'>
                  <p>{getDateObject(movieInfo.session.play_time).day}/{getDateObject(movieInfo.session.play_time).month}/{getDateObject(movieInfo.session.play_time).year}</p>
                  <p className='mx-2'>-</p>
                  <p>{getDateObject(movieInfo.session.play_time).hour}:{getDateObject(movieInfo.session.play_time).minutes}h</p>
                  <p className='mx-2'>-</p>
                  <p>{movieInfo.hall.name}</p>
                </div>
                <p className='font-bold'>{movieInfo.movie.title}</p>
              </div>
            }
            <div id='selected-seats-container'>
              {pickedSeats}
            </div>
            {(Object.keys(pickedSeats).length === 0 ) ? '' :
              <div className='bg-slate-300'>
                <p>Total entradas: {pickedSeats.length}</p>
                <p>Total precio: {selectedSeatPrices.reduce((acc, number) => acc + number, 0)}€</p>
                <SubmitButton label="Comprar" onClick={handleCreate}/>
              </div>
            }
            </div>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faCircleExclamation} />
            <p className='ml-2'>La Sala 1 NO es accesible para público en silla de ruedas.</p>
          </div>
          <div className='flex items-center mb-5'>
            <FontAwesomeIcon icon={faTriangleExclamation} />
            <p className='ml-2'>No se permitirá la entrada una vez iniciada la función.</p>
          </div>
        </div>
    </Layout>
  )
}

export default Hall
