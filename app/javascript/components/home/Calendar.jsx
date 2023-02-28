import React, { useEffect, useRef, useState } from 'react'
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

const spanishWeekdays =  ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
const breakPointForDayNames = 1010

function Calendar({movies}) {


  const calendarHelperObj = calendarHelper()
  const [currentMonth, setCurrentMonth] = useState('')
  const [calendarGrid, setCalendarGrid] = useState([])
  const [weekdays, setWeekdays] = useState([])

  const [weekDetailsButtons, setWeekDetailsButtons] = useState([])
  const [moviesToDisplay, setMoviesToDisplay] = useState([])


  useEffect(() => {
    window.addEventListener('resize', handleResize)
    if (movies.length === 0) return
    smallCalendarGrid = createSmallCalendar(movies={movies})
    setCurrentMonth(smallCalendarGrid.currentMonth)
    setWeekdays(smallCalendarGrid.weekdays)

    // Group week days and attach listener
    for (let i = 0; i < smallCalendarGrid.calendarGrid.length; i+=7) {
      setCalendarGrid(prev => [...prev,
        <button onClick={handleWeekChange} id={"week-"+(i%34/7)} key={i%7+i%34+"week"} className={(i===0 ? "bg-gray-100 ":"") +"grid grid-cols-7 w-full"}>
          {smallCalendarGrid.calendarGrid.slice(i, i+7)}
        </button>
      ])
    }
    return(() => {
      window.removeEventListener('resize', handleResize)
    })
  }, [movies])

  const handleResize = () => {
    const windowCheck = window.matchMedia(`(max-width: ${breakPointForDayNames}px)`)
    const buttonsContainer = document.getElementById('week-details-buttons-container')
    if (buttonsContainer === null) return
    const buttons = buttonsContainer.childNodes
    if (windowCheck.matches) {
      // console.log("Mobile")
      for (let i = 0; i < buttons.length; i++) {
        // console.log(buttons[i].innerText)
        buttons[i].firstElementChild.innerText = spanishWeekdays[i].slice(0,3) + " " + buttons[i].innerText.split(" ")[1]
      }
    } else {
      for (let i = 0; i < buttons.length; i++) {
        // console.log(buttons[i].innerText)
        buttons[i].firstElementChild.innerText = spanishWeekdays[i] + " " + buttons[i].innerText.split(" ")[1]
      }
      // console.log("Desktop")
    }
  }

  useEffect(() => {
    if (calendarGrid.length === 0) return
    const firstWeek = document.getElementById('week-0')
    const children = firstWeek.children
    const windowCheck = window.matchMedia(`(max-width: ${breakPointForDayNames}px)`)
    for (let i = 0; i < children.length; i++) {
      setWeekDetailsButtons(prev => [...prev,
        <div id={children[i].innerText+"dayName"} key={i+"dayName"} data-other-month={children[i].id ? children[i].id:""} className="flex justify-center items-center bg-white">
          <button onClick={handleDayChange} className="text-white bg-black h-fit w-fit px-0 sm:px-3 " >
          {windowCheck.matches ? calendarHelperObj.spanishWeekdays[i].slice(0,3) + " " + children[i].innerText : calendarHelperObj.spanishWeekdays[i] + " " + children[i].innerText}
          </button>
        </div>
      ])
    }
  }, [calendarGrid])

  useEffect(() => {
    // The logic for the initial position on the weekday

    // Reset all the colors to white
    resetButtonColors()

    let result = []
    if (weekDetailsButtons.length === 0) return
    weekDetailsButtons.forEach((button,index) => {
      if (result.length > 0) return
      const dayToFilter = button.props.children.props.children.split(" ")[1]
      if (button.props['data-other-month'] === "") result = filterMoviesByDay({movies:movies,day:dayToFilter})
      if (result.length > 0) {
        const button = document.getElementById(dayToFilter+"dayName")
        button.classList.remove('bg-white')
        button.classList.add('bg-gray-100')
        setMoviesToDisplay(result)
      }
      if (result.length === 0 && index === weekDetailsButtons.length - 1) {
        const firstButton = document.getElementById(weekDetailsButtons[0].props.children.props.children.split(" ")[1]+"dayName")
        firstButton.classList.remove('bg-white')
        firstButton.classList.add('bg-gray-100')
        setMoviesToDisplay([])
      }
    })
  }, [weekDetailsButtons])

  function resetButtonColors () {
    weekDetailsButtons.forEach((button) => {
      const idHelper = button.props.children.props.children.split(" ")[1]
      // console.log("from color resetter:",idHelper)
      const buttonToReset = document.getElementById(idHelper+"dayName")
      buttonToReset.classList.remove('bg-gray-100')
      buttonToReset.classList.remove('bg-white')
      buttonToReset.classList.add('bg-white')
    })
  }

  function handleDayChange (e) {
    e.preventDefault()
    let result = []
    const allButtons = e.currentTarget.parentElement.parentElement.children
    for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].classList.remove('bg-gray-100')
      allButtons[i].classList.remove('bg-white')
      allButtons[i].classList.add('bg-white')
    }
    e.currentTarget.parentElement.classList.remove('bg-white')
    e.currentTarget.parentElement.classList.add('bg-gray-100')

    const dayToFilter = e.currentTarget.parentElement.id.split("dayName")[0]
    if (e.currentTarget.parentElement.dataset.otherMonth === "") result = filterMoviesByDay({movies:movies.movies,day:dayToFilter})
    // console.log(e.currentTarget.parentElement.dataset.otherMonth)
    setMoviesToDisplay(result)
  }
  const handleWeekChange = (e) => {
    e.preventDefault()
    const windowCheck = window.matchMedia(`(max-width: ${breakPointForDayNames}px)`)
    const weeks = [document.getElementById('week-0'),document.getElementById('week-1'),document.getElementById('week-2'),document.getElementById('week-3'),document.getElementById('week-4')]
    weeks.map(week => {
      if (week.id === e.currentTarget.id) {
        week.classList.add('bg-gray-100')
        const children = week.children
        setWeekDetailsButtons([])
        for (let i = 0; i < children.length; i++) {
          setWeekDetailsButtons(prev => [...prev,
            <div id={children[i].innerText+"dayName"} data-other-month={children[i].id ? children[i].id:""} key={i+"dayName"} className="flex justify-center items-center bg-white">
              <button onClick={handleDayChange} className="text-white bg-black h-fit w-fit px-0 sm:px-3 ">
                {windowCheck.matches ? calendarHelperObj.spanishWeekdays[i].slice(0,3) + " " + children[i].innerText : calendarHelperObj.spanishWeekdays[i] + " " + children[i].innerText}
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
    <div className='flex flex-col-reverse lg:flex-row  max-w-7xl mx-auto pb-10 mx-2 '>

      <div className='w-full lg:w-3/4 bg-gray-100'>
        <div id="week-details-buttons-container" className='h-14 grid grid-cols-7'>
          {weekDetailsButtons}
        </div>
        {moviesToDisplay.length === 0 ? <div className='text-center text-bold'>No hay projectiones en este dia</div> :<Carousel itemClass='flex justify-center' responsive={responsive} className="mx-auto mb-4 pt-5" >{moviesToDisplay}</Carousel>}
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
