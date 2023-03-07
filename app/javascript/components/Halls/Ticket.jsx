import React from 'react'

function Ticket(props) {
  return (
    <div className='bg-black text-white p-2'>
      <p>Asiento elegido:</p>
      <div className='flex'>
        <p>Fila {props.seat_row}</p>
        <p className='mx-2'>-</p>
        <p>Asiento {props.seat_col}</p>
      </div>
      <p>Precio: {props.price}€</p>
    </div>
  )
}

export default Ticket
