import React, { useEffect, useState } from 'react'
import getDateObject from '../helpers/getDateObject'
import calendarHelper from '../helpers/calendarHelper'
import createSmallCalendar from '../helpers/createSmallCalendar'

const firstDayOfMonthHelper = {
  'lunes': 0,
  'martes': 1,
  'miércoles': 2,
  'jueves': 3,
  'viernes': 4,
  'sábado': 5,
  'domingo': 6,
}
const lastDayOfMonthHelper = {
  'lunes': 6,
  'martes': 5,
  'miércoles': 4,
  'jueves': 3,
  'viernes': 2,
  'sábado': 1,
  'domingo': 0,
}
let smallCalendarGrid = {}

function Calendar({movies}) {

  const [currentMonth, setCurrentMonth] = useState('')
  const [calendarGrid, setCalendarGrid] = useState([])
  const [weekdays, setWeekdays] = useState([])
  useEffect(() => {
    if (movies.length === 0) return
    smallCalendarGrid = createSmallCalendar(movies={movies})
    console.log(smallCalendarGrid)
    setCurrentMonth(smallCalendarGrid.currentMonth)
    setCalendarGrid(smallCalendarGrid.calendarGrid)
    setWeekdays(smallCalendarGrid.weekdays)

  }, [movies])
  return (
    <div className='w-72 m-auto'>
      {/* Calendar month */}
      <div className='text-black font-bold' >
        <p>{currentMonth.charAt(0).toUpperCase()+currentMonth.slice(1)}</p>
      </div>
      <div className='grid grid-cols-7'>
        {weekdays}
        {calendarGrid}
      </div>

    </div>
  )
}

export default Calendar
