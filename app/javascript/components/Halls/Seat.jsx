import React, {useState} from 'react'

function Seat() {
  const [isTaken, setIsTaken] = useState(false)

  const handleClick = (props) => {
    setIsTaken(!isTaken)
  }

  return (
    <button onClick={handleClick} className={isTaken ? 'text-red-600 text-2xl mr-5' : 'text-2xl mr-5'}>
      •{/*  h1 w 1 rouded bg */}
    </button>
  )
}

export default Seat
