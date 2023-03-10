import React, {useState} from 'react'

function Seat({row, column, handleSeatClick}) {
  const [isTaken, setIsTaken] = useState(false)

  return (
    <button data-row={Number(row)} data-column={Number(column)+1} onClick={handleSeatClick} className={isTaken ? 'bg-red-600 w-4 h-4 m-2 rounded' : 'w-4 h-4 bg-black m-2 rounded'}>
    </button>
  )
}

export default Seat
