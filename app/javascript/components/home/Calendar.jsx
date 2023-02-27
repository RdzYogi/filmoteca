import React, { useEffect, useState } from 'react'
import getDateObject from '../helpers/getDateObject'
import calendarHelper from '../helpers/calendarHelper'
import createSmallCalendar from '../helpers/createSmallCalendar'
import Carousel from 'react-multi-carousel'
import filterMoviesByDay from '../helpers/filterMoviesByDay'

let smallCalendarGrid = {}
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1
  }
};

function Calendar({movies}) {

  const calendarHelperObj = calendarHelper()
  const [currentMonth, setCurrentMonth] = useState('')
  const [calendarGrid, setCalendarGrid] = useState([])
  const [weekdays, setWeekdays] = useState([])

  const [weekDetailsButtons, setWeekDetailsButtons] = useState([])
  const [moviesToDisplay, setMoviesToDisplay] = useState([])


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

  useEffect(() => {
    if (calendarGrid.length === 0) return
    const firstWeek = document.getElementById('week-0')
    const children = firstWeek.children
    for (let i = 0; i < children.length; i++) {
      setWeekDetailsButtons(prev => [...prev,
        <div key={i+"dayName"} className="flex justify-center items-center bg-white">
          <button onClick={handleDayChange} className="text-white bg-black h-fit w-fit px-3 " >
            {calendarHelperObj.spanishWeekdays[i] + " " + children[i].innerText}
          </button>
        </div>
      ])
    }
  }, [calendarGrid])

  useEffect(() => {
    // The logic for the initial position on the weekday
    const startDay = "1"
    if (weekDetailsButtons.length === 0) return
    weekDetailsButtons.forEach((button) => {
      console.log(button.props)
      if (button.props.children.props.children.split(" ")[1] === startDay) {
        button.props.className += "bg-gray-100"
      }
    })
    setMoviesToDisplay(filterMoviesByDay({movies:movies,day:startDay}))
  }, [weekDetailsButtons])

  const handleDayChange = (e) => {
    console.log(e.currentTarget.innerText.split(" ")[1])
  }
  const handleWeekChange = (e) => {
    e.preventDefault()
    const weeks = [document.getElementById('week-0'),document.getElementById('week-1'),document.getElementById('week-2'),document.getElementById('week-3'),document.getElementById('week-4')]
    weeks.map(week => {
      if (week.id === e.currentTarget.id) {
        week.classList.add('bg-gray-100')
        const children = week.children
        setWeekDetailsButtons([])
        for (let i = 0; i < children.length; i++) {
          setWeekDetailsButtons(prev => [...prev,
            <div key={i+"dayName"} className="flex justify-center items-center bg-white">
              <button onClick={handleDayChange} className="text-white bg-black h-fit w-fit px-3 " >
                {calendarHelperObj.spanishWeekdays[i] + " " + children[i].innerText}
              </button>
            </div>
          ])
        }
      } else {
        week.classList.remove('bg-gray-100')
      }
    })
  }
  return (
    <div className='flex justify-between max-w-7xl mx-auto pb-10 h-[40rem]'>
      <div className='w-3/4 bg-gray-100'>
        <div className='w-full h-14 grid grid-cols-7'>
          {weekDetailsButtons}
        </div>
        <div>
          <Carousel itemClass='flex justify-center' responsive={responsive} className="mx-auto mb-32 max-w-7xl" >
            {moviesToDisplay}
          </Carousel>
        </div>

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
