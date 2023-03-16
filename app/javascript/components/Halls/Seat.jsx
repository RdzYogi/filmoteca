import React, {useState} from 'react'

function Seat({row, column, handleSeatClick, id, disabledIds}) {
  const [isSelected, setIsSelected] = useState(false)

  const handleSelected = () => {
    setIsSelected(!isSelected)
  }

  const isDisabled = disabledIds.includes(id);
  // console.log(id, isDisabled)

  return (
    <button data-row={Number(row)} data-column={Number(column)+1} onMouseDown={handleSelected} onClick={handleSeatClick} className={isSelected ? 'bg-red-600 w-4 h-4 m-2 rounded' : 'w-4 h-4 bg-black m-2 rounded'} disabled={isDisabled}>
    </button>
  )
}

export default Seat
