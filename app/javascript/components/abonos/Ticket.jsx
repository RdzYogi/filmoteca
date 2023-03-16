import React from 'react'

function Ticket(props) {
  return (
    <div className='flex justify-between p-3 my-3 bg-black text-white items-center'>
      <p className='w-1/2'>{props.name}</p>
      <p className='w-1/4 text-center'>{props.price}</p>
      { props.name !== "ENTRADA SENCILLA" &&
        <button className='bg-white text-black p-1 w-1/4'>Comprar</button>
      }
    </div>
  )
}

export default Ticket
