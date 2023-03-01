import React, { useEffect, useState } from 'react'
import createSmallCalendar from '../helpers/createSmallCalendar'

function MobileCalendar({movies}) {
  const [currentMonth, setCurrentMonth] = useState('')
  const [calendarGrid, setCalendarGrid] = useState([])
  const [weekdays, setWeekdays] = useState([])

  useEffect(() => {
    if (movies.length === 0) return
    const smallCalendarGrid = createSmallCalendar(movies={movies})
    // console.log(smallCalendarGrid.calendarGrid)
    setCurrentMonth(smallCalendarGrid.currentMonth)
    setWeekdays(smallCalendarGrid.weekdays)

    // Attach listeners and format calendar grid
    for (let i = 0; i < smallCalendarGrid.calendarGrid.length; i++) {
      if (smallCalendarGrid.calendarGrid[i].props.children.length === 2 && smallCalendarGrid.calendarGrid[i].props.children[0].props.children === 1){
        setCalendarGrid(prev => [...prev, <button onClick={handleDayChange} className='h-10 w-10 rounded-full mb-2 flex justify-center border border-blue-400' key={i+"day"}>{smallCalendarGrid.calendarGrid[i]}</button>])
      } else if(smallCalendarGrid.calendarGrid[i].props.children.length === undefined && smallCalendarGrid.calendarGrid[i].props.children !== ""){
        setCalendarGrid(prev => [...prev, <div className='h-10 w-10 rounded-full mb-2 flex justify-center border border-transparent text-gray-300' key={i+"day"}>{smallCalendarGrid.calendarGrid[i]}</div>])
      }
      else{
        setCalendarGrid(prev => [...prev, <button onClick={handleDayChange} className='h-10 w-10 rounded-full mb-2 flex justify-center border border-transparent' key={i+"day"}>{smallCalendarGrid.calendarGrid[i]}</button>])
      }
    }
  }, [movies])

  const handleDayChange = (e) => {
    const buttons = e.currentTarget.parentNode.childNodes
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('border-blue-400')
      buttons[i].classList.add('border-transparent')
    }
    e.currentTarget.classList.remove('border-transparent')
    e.currentTarget.classList.add('border-blue-400')
  }
  return (
    <div className='w-72 pt-10 mx-auto'>
        {/* Calendar month */}
        <div className='text-black font-bold' >
          <p>{currentMonth.charAt(0).toUpperCase()+currentMonth.slice(1)}</p>
        </div>
        <div className='grid grid-cols-7'>
          {weekdays}
        </div >
        <div className='grid grid-cols-7 place-items-center'>
          {calendarGrid}
        </div>
    </div>
  )
}

export default MobileCalendar
