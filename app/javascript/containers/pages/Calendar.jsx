import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CalendarCards from '../../components/calendar/CalendarCards'
import DesktopCalendar from '../../components/calendar/DesktopCalendar'
import MobileCalendar from '../../components/calendar/MobileCalendar'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import MovieCard from '../../components/shared/MovieCard'
import Layout from '../../hocs/layouts/Layout'

function Calendar() {
  const [movies, setMovies] = useState([])
  const [desktopCards, setDesktopCards] = useState([])
  const moviesData = useSelector(state => state.dataManager.movies)
  if (moviesData.length > 0 && movies.length === 0) {
    moviesData.forEach((movie,index) => {
      setMovies(prev => [...prev, <MovieCard key={index} movie={movie} cycle={movie.include.cycle}/> ])
      // console.log(movie.include.projections)
      movie.include.projections.forEach((projection,index) => {
        setDesktopCards(prev => [...prev,<CalendarCards movie={movie} projection={projection}/>])
      })
    })
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
