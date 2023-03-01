import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MobileCalendar from '../../components/calendar/MobileCalendar'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import MovieCard from '../../components/shared/MovieCard'
import Layout from '../../hocs/layouts/Layout'

function Calendar() {
  const [movies, setMovies] = useState([])
  const [loaded, setLoaded] = useState(false)
  const moviesData = useSelector(state => state.dataManager.movies)
  if (moviesData.length > 0 && movies.length === 0) {
    moviesData.forEach((movie,index) => {
      setMovies(prev => [...prev, <MovieCard key={index} movie={movie} cycle={movie.include.cycle}/> ])
    })
    setLoaded(true)
  }
  return (
    <Layout>
      <Navbar/>
      <div className="pt-40">
        <div id="movie-calendar-container">
          <MobileCalendar movies={movies}/>
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Calendar
