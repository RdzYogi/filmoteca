import React, {useState} from 'react'

function Seat() {
  const [isTaken, setIsTaken] = useState(false)

  const handleClick = (props) => {
    setIsTaken(!isTaken)
  }

  return (
    <button onClick={handleClick} className={isTaken ? 'bg-red-600 w-4 h-4 m-2 rounded' : 'w-4 h-4 bg-black m-2 rounded'}>
    </button>
  )
}

export default Seat
