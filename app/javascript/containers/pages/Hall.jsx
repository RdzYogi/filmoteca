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

// hall 1 rows
//   const h1row1 = hallData.seats.filter(seat => seat.row === "0").slice(0,16)
//   const h1row2 = hallData.seats.filter(seat => seat.row === "1").slice(0,16)
//   const h1row3 = hallData.seats.filter(seat => seat.row === "2").slice(0,16)
//   const h1row4 = hallData.seats.filter(seat => seat.row === "3").slice(0,16)
//   const h1row5 = hallData.seats.filter(seat => seat.row === "4").slice(0,16)
//   const h1row6 = hallData.seats.filter(seat => seat.row === "5").slice(0,16)
//   const h1row7 = hallData.seats.filter(seat => seat.row === "6").slice(0,16)
//   const h1row8 = hallData.seats.filter(seat => seat.row === "7").slice(0,16)
//   const h1row9 = hallData.seats.filter(seat => seat.row === "8").slice(0,16)
//   const h1row10 = hallData.seats.filter(seat => seat.row === "9").slice(0,16)
//   const h1row11 = hallData.seats.filter(seat => seat.row === "10").slice(0,16)
//   const h1row12 = hallData.seats.filter(seat => seat.row === "11").slice(0,16)
//   const h1row13a = hallData.seats.filter((seat) => seat.row === "12").slice(1,8)
//   const h1row13b = hallData.seats.filter((seat) => seat.row === "12").slice(9,16)
//   const h1row14a = hallData.seats.filter(seat => seat.row === "13").slice(2,8)
//   const h1row14b = hallData.seats.filter(seat => seat.row === "13").slice(9,15)
//   const h1row15a = hallData.seats.filter(seat => seat.row === "14").slice(3,8)
//   const h1row15b = hallData.seats.filter(seat => seat.row === "14").slice(9,14)
//   const h1row16 = hallData.seats.filter(seat => seat.row === "15").slice(0,17)
//   const h1row17 = hallData.seats.filter(seat => seat.row === "16").slice(0,17)
//   const h1row18 = hallData.seats.filter(seat => seat.row === "17").slice(0,17)
//   const h1row19 = hallData.seats.filter(seat => seat.row === "18").slice(0,17)
//   const h1row20 = hallData.seats.filter(seat => seat.row === "19").slice(0,17)

// // hall 2 rows
//   const h2row1 = hallData.seats.filter(seat => seat.row === "0").slice(0,8)
//   const h2row2 = hallData.seats.filter(seat => seat.row === "1").slice(0,9)
//   const h2row3 = hallData.seats.filter(seat => seat.row === "2").slice(0,10)
//   const h2row4 = hallData.seats.filter(seat => seat.row === "3").slice(0,10)
//   const h2row5 = hallData.seats.filter(seat => seat.row === "4").slice(0,11)
//   const h2row6 = hallData.seats.filter(seat => seat.row === "5").slice(0,11)
//   const h2row7 = hallData.seats.filter(seat => seat.row === "6").slice(0,12)
//   const h2row8 = hallData.seats.filter(seat => seat.row === "7").slice(0,11)
//   const h2row9 = hallData.seats.filter(seat => seat.row === "8").slice(0,12)
//   const h2row10 = hallData.seats.filter(seat => seat.row === "9").slice(0,12)
//   const h2row11 = hallData.seats.filter(seat => seat.row === "10").slice(0,13)

  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 max-w-7xl mt-6 mb-20 sm:mx-auto md:px-12 sm:px-6 px-4 text-justify">
        <h1 className='text-center text-2xl font-bold'>ASIENTOS</h1>
        <p>Elija sus asientos (Los marcados en verde están disponibles.)</p>
        <p>{hallData.hall.name}</p>
        {/* Hall2 seats */}

        {formatedHall}
         {/* Hall2 seats */}
        {/* {hallData.hall.name === "Sala 2" &&
          <div className='flex flex-col-reverse'>
            <div className='flex'>
              <p className='self-center mr-10'>0001</p>
              {h2row1.map((seat, index) => {
                return <Seat key={index} row={Number(seat.row)+1} column={Number(seat.column)+1}/>
              })}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0002</p>
              {h2row2.map((seat, index) => {
                return <Seat key={index} row={Number(seat.row)+1} column={Number(seat.column)+1}/>
              })}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0003</p>
              {h2row3.map((seat, index) => {
                return <Seat key={index} row={Number(seat.row)+1} column={Number(seat.column)+1}/>
              })}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0004</p>
              {h2row4.map((seat, index) => {
                return <Seat key={index} row={Number(seat.row)+1} column={Number(seat.column)+1}/>
              })}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0005</p>
              {h2row5.map((seat, index) => {
                return <Seat key={index} row={Number(seat.row)+1} column={Number(seat.column)+1}/>
              })}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0006</p>
              {h2row6.map((seat, index) => {
                return <Seat key={index} row={Number(seat.row)+1} column={Number(seat.column)+1}/>
              })}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0007</p>
              {h2row7.map((seat, index) => {
                return <Seat key={index} row={Number(seat.row)+1} column={Number(seat.column)+1}/>
              })}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0008</p>
              {h2row8.map((seat, index) => {
                return <Seat key={index} row={Number(seat.row)+1} column={Number(seat.column)+1}/>
              })}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0009</p>
              {h2row9.map((seat, index) => {
                return <Seat key={index} row={Number(seat.row)+1} column={Number(seat.column)+1}/>
              })}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0010</p>
              {h2row10.map((seat, index) => {
                return <Seat key={index} row={Number(seat.row)+1} column={Number(seat.column)+1}/>
              })}
            </div>
            <div className='flex'>
              <p className='self-center mr-10'>0011</p>
              {h2row11.map((seat, index) => {
                return <Seat key={index} row={Number(seat.row)+1} column={Number(seat.column)+1}/>
              })}
            </div>
          </div>
        } */}

        <p>ESCENARIO</p>
        <p>La Sala 1 NO es accesible para público en silla de ruedas.</p>
        <p>No se permitirá la entrada una vez iniciada la función.</p>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Hall
