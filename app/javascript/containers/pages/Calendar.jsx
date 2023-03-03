import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import CalendarCards from '../../components/calendar/CalendarCards'
import DesktopCalendar from '../../components/calendar/DesktopCalendar'
import MobileCalendar from '../../components/calendar/MobileCalendar'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import MovieCard from '../../components/shared/MovieCard'
import Layout from '../../hocs/layouts/Layout'

const breakPoint = window.matchMedia('(max-width: 768px)')

function Calendar() {
  const [movies, setMovies] = useState([])
  const [desktopCards, setDesktopCards] = useState([])
  const moviesData = useSelector(state => state.dataManager.movies)

  const renderMobileCards = useMemo(() => {
    const result = []
    moviesData.forEach((movie,index) => {
      result.push(<MovieCard key={index} movie={movie} cycle={movie.include.cycle}/>)
    })
    return result
  },[moviesData.length])

  const renderDesktopCards = useMemo(() => {
    const result = []
    moviesData.forEach((movie) => {
      movie.include.projections.forEach((projection) => {
        result.push(<CalendarCards movie={movie} projection={projection}/>)
      })
    })
    return result
  },[moviesData.length])

  useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener('resize', handleResize)
    if (moviesData.length > 0 && movies.length === 0) {
      if (breakPoint.matches) {
        // We are in mobile
        setMovies(renderMobileCards)
      } else {
        // We are in desktop
        setDesktopCards(renderDesktopCards)
      }
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[moviesData])

  const handleResize = () => {
    if (breakPoint.matches) {
      // We are in mobile
      setMovies(renderMobileCards)
    } else {
      // We are in desktop
      setDesktopCards(renderDesktopCards)
    }
  }
  return (
    <Layout>
      <Navbar/>
      <div className="pt-40">
        <div id="movie-calendar-container" className='block md:hidden'>
          <MobileCalendar movies={movies}/>
        </div>
        <div id="movie-calendar-container" className='hidden md:block'>
          <DesktopCalendar movies={desktopCards}/>
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Calendar
