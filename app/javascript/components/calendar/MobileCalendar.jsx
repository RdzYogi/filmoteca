import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import createSmallCalendar from '../helpers/createSmallCalendar'
import filterMoviesByDay from '../helpers/filterMoviesByDay'
import getDateObject from '../helpers/getDateObject'

function MobileCalendar({movies}) {
  const [currentMonth, setCurrentMonth] = useState('')
  const [calendarGrid, setCalendarGrid] = useState([])
  const [weekdays, setWeekdays] = useState([])
  const [daysDetails, setDaysDetails] = useState([])

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

    // Create the days details scrollable section
    const today = new Date()
    const todayDateObj = getDateObject(today)

    for (let i = 0; i < smallCalendarGrid.calendarGrid.length; i++) {
      if (smallCalendarGrid.calendarGrid[i].key.split(' ')[1] === "currMonth") {
        const day = Number(smallCalendarGrid.calendarGrid[i].key.split(' ')[0])+1
        const filteredMovies = filterMoviesByDay({movies:movies.movies,day:day.toString()})
        const newDate = new Date(todayDateObj.year,today.getMonth(),day)
        const spanishDay = getDateObject(newDate.toDateString(),{dayLong:true}).day
        const formattedSpanishDay = (spanishDay.charAt(0).toUpperCase()+spanishDay.slice(1)).slice(0,3)
        if (filteredMovies.length === 0) {
          setDaysDetails(prev => [...prev,
            <div key={i+"day"} id={i+"-day-to-display"} className="flex justify-between pb-3">
              <div className='w-[10%] flex flex-col items-center pl-2'>
                <p>{formattedSpanishDay}</p>
                <p>{Number(smallCalendarGrid.calendarGrid[i].key.split(' ')[0])+1}</p>
              </div>
              <div className='h-10 w-[85%] bg-gray-200 mt-2 ml-2' >No hay projections en ese dia</div>
            </div>
          ])
        } else{
          const result = []
          filteredMovies.forEach((movie) => {
            // console.log(movie)
            let playTimeString = ""
            movie.props.movie.include.projections.forEach((projection) => {
              const sessionPlayTime = getDateObject(projection.include.session.play_time)
              // console.log("algo",Number(sessionPlayTime.day))
              if(day === Number(sessionPlayTime.day)){
                playTimeString = sessionPlayTime.hour + ":" + sessionPlayTime.minutes + " H - " + projection.include.hall.name
                // console.log(playTimeString)
              }
            })
            result.push(
              <Link to={"/movies/" + movie.props.movie.movie.slug } key={movie.props.movie.movie.slug} className={'flex flex-col h-20 mb-2 bg-'+ movie.props.cycle.color } >
                <p className='ml-2 font-bold'>{movie.props.movie.movie.title}</p>
                <p className='ml-2'>{movie.props.movie.movie.director}</p>
                <p className='ml-2'>{playTimeString}</p>
              </Link>
            )
          })
          setDaysDetails(prev => [...prev,
            <div key={i+"day"} id={i+"-day-to-display"} className="flex justify-between pb-3">
              <div className='w-[10%] flex flex-col items-center pl-2'>
                <p>{formattedSpanishDay}</p>
                <p>{Number(smallCalendarGrid.calendarGrid[i].key.split(' ')[0])+1}</p>
              </div >
              <div className='flex flex-col mt-2 w-[85%]'>
                {result}
              </div>
            </div>
          ])
        }
      }
    }
  }, [movies])

  const handleDayChange = (e) => {
    // console.log(e.currentTarget.innerText)
    const daysContainer = document.getElementById('days-container')
    const dayClicked = Number(e.currentTarget.innerText)
    console.log(dayClicked)
    const dayToDisplay = document.getElementById(dayClicked+1+"-day-to-display")
    // dayToDisplay.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"})
    const offsetTop = dayToDisplay.offsetTop - daysContainer.offsetTop
    // console.log(offsetTop *0.7)
    daysContainer.scrollTo({top:offsetTop,behavior:'smooth'})
    console.log(dayToDisplay)
    const buttons = e.currentTarget.parentNode.childNodes
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('border-blue-400')
      buttons[i].classList.add('border-transparent')
    }
    e.currentTarget.classList.remove('border-transparent')
    e.currentTarget.classList.add('border-blue-400')
  }
  return (
    <div className='w-72 mx-auto'>
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
        <div className='w-full h-px bg-black mb-3'></div>
        <div id="days-container" className='w-full h-60 overflow-x-auto mb-5 scroll-smooth'>
          {daysDetails}
        </div>
    </div>
  )
}

export default MobileCalendar
