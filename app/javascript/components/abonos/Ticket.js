import React from 'react'

function Ticket(props) {
  return (
    <div className='flex justify-between p-3 my-3 bg-black text-white items-center'>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <button className='bg-white text-black p-1'>Comprar</button>
    </div>
  )
}

export default Ticket
