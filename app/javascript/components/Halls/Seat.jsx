import React, {useState} from 'react'

function Seat(props) {
  const [isTaken, setIsTaken] = useState(false)

  const handleClick = () => {
    setIsTaken(!isTaken)
  }

  return (
    <button onClick={handleClick} className={isTaken ? 'text-red-600 text-4xl mr-5' : 'text-4xl mr-5'}>
      •{props.row}{props.column}
    </button>
  )
}

export default Seat
