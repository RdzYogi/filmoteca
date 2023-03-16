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
    <button data-row={Number(row)+1} data-column={Number(column)} data-price={selectedSeatPrice} onMouseDown={handleSelected} onClick={handleSeatClick} className={isSelected ? 'bg-red-600 w-4 h-4 m-2 rounded' : 'w-4 h-4  m-2 rounded ' + (isDisabled ? 'bg-gray-400' : 'bg-black')} disabled={isDisabled}>
    </button>
  )
}

export default Seat
