import React, { useEffect, useState } from 'react'
import getDateObject from '../helpers/getDateObject'
import calendarHelper from '../helpers/calendarHelper'
import createSmallCalendar from '../helpers/createSmallCalendar'

let smallCalendarGrid = {}

function Calendar({movies}) {

  const [currentMonth, setCurrentMonth] = useState('')
  const [calendarGrid, setCalendarGrid] = useState([])
  const [weekdays, setWeekdays] = useState([])
  const [currentWeek, setCurrentWeek] = useState("week-0")

  useEffect(() => {
    if (movies.length === 0) return
    smallCalendarGrid = createSmallCalendar(movies={movies})
    setCurrentMonth(smallCalendarGrid.currentMonth)
    setWeekdays(smallCalendarGrid.weekdays)
    // setCalendarGrid(smallCalendarGrid.calendarGrid)

    // console.log(smallCalendarGrid.calendarGrid)
    // Group week days and attach listener
    for (let i = 0; i < smallCalendarGrid.calendarGrid.length; i+=7) {
      setCalendarGrid(prev => [...prev,
        <button onClick={handleWeekChange} id={"week-"+(i%34/7)} key={i%7+i%34+"week"} className={(i===0 ? "bg-gray-100 ":"") +"grid grid-cols-7 w-full"}>
          {smallCalendarGrid.calendarGrid.slice(i, i+7)}
        </button>
      ])
    }
  }, [movies])
  const handleWeekChange = (e) => {
    e.preventDefault()
    const weeks = [document.getElementById('week-0'),document.getElementById('week-1'),document.getElementById('week-2'),document.getElementById('week-3'),document.getElementById('week-4')]
    weeks.map(week => {
      if (week.id === e.currentTarget.id) {
        week.classList.add('bg-gray-100')
        setCurrentWeek(week.id)
      } else {
        week.classList.remove('bg-gray-100')
      }
    })
  }
  return (
    <div className='flex justify-between max-w-7xl mx-auto pb-10 h-[32rem]'>
      <div className='w-3/4 bg-gray-200'>

      </div>
      <div className='w-72 pt-10 mx-auto'>
        {/* Calendar month */}
        <div className='text-black font-bold' >
          <p>{currentMonth.charAt(0).toUpperCase()+currentMonth.slice(1)}</p>
        </div>
        <div className='grid grid-cols-7'>
          {weekdays}
        </div>
          {calendarGrid}
      </div>
    </div>
  )
}

export default Calendar
