import React, {useState} from 'react'

function Seat({row, column, selectedSeatPrice, handleSeatClick, id, reservations}) {
  const [isSelected, setIsSelected] = useState(false)

  const handleSelected = () => {
    setIsSelected(!isSelected)
  }

  let isDisabled = false
  reservations.forEach(reservation => {
    if (reservation.seat_id === id){
      isDisabled = true
    }
  });
  // console.log(id, reservations)

  return (
    <button data-row={Number(row)+1} data-column={Number(column)+1} data-price={selectedSeatPrice} onMouseDown={handleSelected} onClick={handleSeatClick} className={'w-4 h-4 m-2 rounded-full '+(isSelected ? 'bg-blue-600 ' : (isDisabled ? 'bg-gray-400' : 'bg-green-500')) } disabled={isDisabled}>
    </button>
  )
}

export default Seat
