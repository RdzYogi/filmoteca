import React from 'react'
import { Link } from 'react-router-dom'

function Ticket(props) {
  const type = props.name.split(" ")[1]
  // console.log(type)
  let discount = false
  if (type === "10" && props.price === "15€") discount = true
  if (type === "ANUAL" && props.price === "30€") discount = true
  return (
    <div className='flex justify-between p-3 my-3 bg-black text-white items-center'>
      <p className='w-1/2'>{props.name}</p>
      <p className='w-1/4 text-center'>{props.price}</p>
      { props.name !== "ENTRADA SENCILLA" &&
        <Link to={`/compra_abono/${type}/${discount}`}
         className='bg-white text-black p-1 w-1/4'>Comprar
        </Link>
      }
    </div>
  )
}

export default Ticket
