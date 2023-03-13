import React, { useEffect, useRef, useState } from 'react'
import calendarHelper from '../helpers/calendarHelper'
import createSmallCalendar from '../helpers/createSmallCalendar'
import Carousel from 'react-multi-carousel'
import filterMoviesByDay from '../helpers/filterMoviesByDay'
import RightArrow from '../carousel/RightArrow'
import LeftArrow from '../carousel/LeftArrow'


let smallCalendarGrid = {}
const responsive = () =>{
  return ({
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
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
  });
}

const spanishWeekdays =  ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
const breakPointForDayNames = 1010
const selectedColor = "bg-gray-200"
const unselectedColor = "bg-white"

function Calendar({movies}) {

  const calendarHelperObj = calendarHelper()
  const [currentMonth, setCurrentMonth] = useState('')
  const [calendarGrid, setCalendarGrid] = useState([])
  const [weekdays, setWeekdays] = useState([])

  const [weekDetailsButtons, setWeekDetailsButtons] = useState([])
  const [moviesToDisplay, setMoviesToDisplay] = useState([])
  const [movieCount, setMovieCount] = useState(null)


  useEffect(() => {
    window.addEventListener('resize', handleResize)
    if (movies.length === 0) return
    smallCalendarGrid = createSmallCalendar(movies={movies})
    setCurrentMonth(smallCalendarGrid.currentMonth)
    setWeekdays(smallCalendarGrid.weekdays)

    // Group week days and attach listener
    for (let i = 0; i < smallCalendarGrid.calendarGrid.length; i+=7) {
      setCalendarGrid(prev => [...prev,
        <button onClick={handleWeekChange} id={"week-"+(i%34/7)} key={i%7+i%34+"week"} className={(i===0 ? selectedColor:"hover:bg-gray-100") +" transition duration-300 grid grid-cols-7 w-full"}>
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
    // The clickable buttons for the days of the week initial render
    if (calendarGrid.length === 0) return
    const firstWeek = document.getElementById('week-0')
    const children = firstWeek.children
    const windowCheck = window.matchMedia(`(max-width: ${breakPointForDayNames}px)`)
    for (let i = 0; i < children.length; i++) {
      setWeekDetailsButtons(prev => [...prev,
        <div id={children[i].innerText+"dayName"} key={i+"dayName"} data-other-month={children[i].id ? children[i].id:""} className={"flex transition hover:bg-gray-100 duration-300 justify-center items-center " + unselectedColor}>
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

    // Find the first day of that week that has a movie
    // And set the color to gray
    let result = []
    if (weekDetailsButtons.length === 0) return
    weekDetailsButtons.forEach((button,index) => {
      if (result.length > 0) return
      const dayToFilter = Number(button.props.children.props.children.split(" ")[1])
      if (button.props['data-other-month'] === "") result = filterMoviesByDay({movies:movies,day:dayToFilter})
      if (result.length > 0) {
        const button = document.getElementById(dayToFilter+"dayName")
        button.classList.remove(unselectedColor)
        button.classList.remove("hover:bg-gray-100")
        button.classList.add(selectedColor)
        if (result.length === 1) {
          setMovieCount(1)
        } else {
          setMovieCount(null)
        }
        setMoviesToDisplay(result)
      }
      if (result.length === 0 && index === weekDetailsButtons.length - 1) {
        const firstButton = document.getElementById(weekDetailsButtons[0].props.children.props.children.split(" ")[1]+"dayName")
        firstButton.classList.remove(unselectedColor)
        firstButton.classList.remove("hover:bg-gray-100")
        firstButton.classList.add(selectedColor)
        setMoviesToDisplay([])
      }
    })
  }, [weekDetailsButtons])

  function resetButtonColors () {
    weekDetailsButtons.forEach((button) => {
      const idHelper = button.props.children.props.children.split(" ")[1]
      // console.log("from color resetter:",idHelper)
      const buttonToReset = document.getElementById(idHelper+"dayName")
      buttonToReset.classList.remove(selectedColor)
      buttonToReset.classList.remove(unselectedColor)
      buttonToReset.classList.add(unselectedColor)
    })
  }

  function handleDayChange (e) {
    e.preventDefault()
    // console.log(movies)
    let result = []
    const allButtons = e.currentTarget.parentElement.parentElement.children
    for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].classList.remove(selectedColor)
      allButtons[i].classList.remove(unselectedColor)
      allButtons[i].classList.add(unselectedColor)
      allButtons[i].classList.add("hover:bg-gray-100")
    }
    e.currentTarget.parentElement.classList.remove(unselectedColor)
    e.currentTarget.parentElement.classList.remove("hover:bg-gray-100")
    e.currentTarget.parentElement.classList.add(selectedColor)


    const dayToFilter = e.currentTarget.parentElement.id.split("dayName")[0]
    if (e.currentTarget.parentElement.dataset.otherMonth === ""){
      if(movies.length > 0){
        result = filterMoviesByDay({movies:movies,day:dayToFilter})
      } else {
        result = filterMoviesByDay({movies:movies.movies,day:dayToFilter})
      }
    }
    if (result.length === 1) {
      setMovieCount(1)
    } else {
      setMovieCount(null)
    }
    // console.log(e.currentTarget.parentElement.dataset.otherMonth)
    setMoviesToDisplay(result)
  }

  const handleWeekChange = (e) => {
    e.preventDefault()
    const windowCheck = window.matchMedia(`(max-width: ${breakPointForDayNames}px)`)
    const weeks = [document.getElementById('week-0'),document.getElementById('week-1'),document.getElementById('week-2'),document.getElementById('week-3'),document.getElementById('week-4')]
    weeks.map(week => {
      if (week.id === e.currentTarget.id) {
        week.classList.add(selectedColor)
        week.classList.remove("hover:bg-gray-100")
        const children = week.children
        setWeekDetailsButtons([])
        for (let i = 0; i < children.length; i++) {
          setWeekDetailsButtons(prev => [...prev,
            <div id={children[i].innerText+"dayName"} data-other-month={children[i].id ? children[i].id:""} key={i+"dayName"} className="flex justify-center items-center bg-white transition duration-300 hover:bg-gray-100">
              <button onClick={handleDayChange} className="text-white bg-black h-fit w-fit px-0 sm:px-3 ">
                {windowCheck.matches ? calendarHelperObj.spanishWeekdays[i].slice(0,3) + " " + children[i].innerText : calendarHelperObj.spanishWeekdays[i] + " " + children[i].innerText}
              </button>
            </div>
          ])
        }
      } else {
        week.classList.remove(selectedColor)
        week.classList.add("hover:bg-gray-100")
      }
    })
  }
  return (
    <div className='flex flex-col-reverse lg:flex-row  max-w-7xl mx-auto pb-10'>

      <div className={'w-full lg:w-3/4 ' + selectedColor}>
        <div id="week-details-buttons-container" className='h-14 grid grid-cols-7'>
          {weekDetailsButtons}
        </div>
        {moviesToDisplay.length === 0 ? <div className='text-center text-bold h-96'>No hay projectiones en este dia</div> : <Carousel infinite={true} shouldResetAutoplay movies={moviesToDisplay} customLeftArrow={<LeftArrow/>} customRightArrow={<RightArrow/>} itemClass='flex justify-center' responsive={responsive()} className={" mx-auto mb-4 pt-5 " + (movieCount === 1 ? "flex justify-center" : "")} >{moviesToDisplay}</Carousel>}
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
