import React, { useEffect, useState } from 'react'
import calendarHelper from '../helpers/calendarHelper'
import getDateObject from '../helpers/getDateObject'

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

function DesktopCalendar({movies}) {
  // console.log(movies)
  const [calendarGrid, setCalendarGrid] = useState([])
  const calendarHelperInfo = calendarHelper()
  // Get current month
  const dateToday = new Date()
  // Get the month name in spanish
  const currentMonth = getDateObject(dateToday.toDateString(),{monthLong:true}).month
  const currentMonthCapitalized = currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)
  const currentYear = dateToday.getFullYear()

  useEffect(() => {
    // Get the month index
    if (movies.length === 0) return
    const monthIndex = dateToday.getMonth()

      // Fill the calendar grid with the days of the previous month
    const firstDayOfMonth = getDateObject(calendarHelperInfo[monthIndex][0],{dayLong:true}).day
    const daysOfPreviousMonth = firstDayOfMonthHelper[firstDayOfMonth]
    if(monthIndex > 0) {
      for (let i = 0; i < daysOfPreviousMonth; i++) {
        const dayHeader = Object.keys(firstDayOfMonthHelper)[i].charAt(0).toUpperCase() + Object.keys(firstDayOfMonthHelper)[i].slice(1)
        setCalendarGrid(calendarGrid => [...calendarGrid,<div className='w-full h-fit flex justify-center' id={i+"prevMonth"} key={i+" prevMonth"}><div className='text-gray-300 flex flex-col items-center bg-black w-fit px-2' >{dayHeader} {calendarHelperInfo[monthIndex-1].length-daysOfPreviousMonth+i+1}</div></div>])
      }
    } else {
      for (let i = 0; i < daysOfPreviousMonth; i++) {
        const dayHeader = Object.keys(firstDayOfMonthHelper)[i].charAt(0).toUpperCase() + Object.keys(firstDayOfMonthHelper)[i].slice(1)
        setCalendarGrid(calendarGrid => [...calendarGrid,<div className='w-full h-fit flex justify-center' id={i+"prevMonth"} key={i+" prevMonth"}><div className='text-gray-300 flex flex-col items-center bg-black w-fit px-2' >{dayHeader} {calendarHelperInfo.decemberYearBefore.length-daysOfPreviousMonth+i+1}</div></div>])
      }
    }

    // Fill the calendar grid with the days of the current month
    const daysOfCurrentMonth = calendarHelperInfo[monthIndex].length
    for (let i = 0; i < daysOfCurrentMonth; i++) {
      const dayHeader = getDateObject(new Date(currentYear,monthIndex,i+1).toDateString(),{dayLong:true}).day.charAt(0).toUpperCase() + getDateObject(new Date(currentYear,monthIndex,i+1).toDateString(),{dayLong:true}).day.slice(1) + " " + (i+1)
      const moviesForEachDay = []
      movies.forEach((movieCard,index) => {
        // console.log(movieCard)
        if (getDateObject(movieCard.props.projection.include.session.play_time).day === i+1+"") {
          moviesForEachDay.push(<div key={dayHeader+index} className="flex justify-center">{movieCard}</div>)
        }
      })
      setCalendarGrid(calendarGrid => [...calendarGrid,
      <div className='w-full h-full flex flex-col 'id={i+"currentMonth"} key={i+" currentMonth"}>
        <div className='flex flex-col self-center text-white items-center bg-black w-fit px-2 mb-2' >{dayHeader}
        </div>
        {moviesForEachDay}
      </div>])
    }

    // Fill the calendar grid with the days of the next month
    const lastDayOfMonth = getDateObject(calendarHelperInfo[monthIndex][daysOfCurrentMonth-1],{dayLong:true}).day
    const daysOfNextMonth = lastDayOfMonthHelper[lastDayOfMonth]
    // console.log(daysOfNextMonth)
    if(monthIndex < 11) {
      for (let i = 0; i < daysOfNextMonth; i++) {
        // console.log(Object.keys(lastDayOfMonthHelper)[Object.keys(lastDayOfMonthHelper).length-(daysOfNextMonth-i)],i)
        const dayHeader = Object.keys(lastDayOfMonthHelper)[Object.keys(lastDayOfMonthHelper).length-(daysOfNextMonth-i)].charAt(0).toUpperCase() + Object.keys(lastDayOfMonthHelper)[Object.keys(lastDayOfMonthHelper).length-(daysOfNextMonth-i)].slice(1)
        setCalendarGrid(calendarGrid => [...calendarGrid,<div className='w-full h-fit flex justify-center' key={i+" nextMonth"}><div className='text-gray-300 flex flex-col items-center bg-black w-fit px-2' id={i+"nextMonth"} >{dayHeader} {i+1}</div></div>])
      }
    } else {
      for (let i = 0; i < daysOfNextMonth; i++) {
        const dayHeader = Object.keys(lastDayOfMonthHelper)[i].charAt(0).toUpperCase() + Object.keys(lastDayOfMonthHelper)[i].slice(1)
        setCalendarGrid(calendarGrid => [...calendarGrid,<div className='w-full h-fit flex justify-center' key={i+" nextMonth"}><div className='text-gray-300 flex flex-col items-center bg-black w-fit px-2' id={i+"nextMonth"} >{dayHeader} {i+1}</div></div>])
      }
    }
  },[movies])



  return (
    <div>
      <h1 className='text-center text-xl font-bold'>{currentMonthCapitalized + " de " + currentYear}</h1>
      <div className='grid gap-2 grid-cols-7 justify-center text-sm w-[100vw] lg:w-[90vw] mx-auto'>
        {calendarGrid}
      </div>
    </div>
  )
}

export default DesktopCalendar
