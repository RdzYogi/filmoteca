import React, { useEffect, useState } from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import CycleCard from '../../components/shared/CycleCard'
import MovieCard from '../../components/shared/MovieCard'
// For carousel documentation see react multi carousel git repo
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Calendar from '../../components/home/Calendar'
import { useSelector } from 'react-redux'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
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

function Home() {
  const [ciclos, setCiclos] = useState([])
  const [movieCards, setMovieCards] = useState([])

  const moviesData= useSelector(state => state.dataManager.movies)
  const cyclesData = useSelector(state => state.dataManager.cycles)
  if (moviesData.length > 0 && movieCards.length === 0) {
    moviesData.forEach((movie,index) => {
      setMovieCards(prev => [...prev, <MovieCard key={index} movie={movie} cycle={movie.include.cycle}/> ])
    })
  }
  if (cyclesData.length > 0 && ciclos.length === 0) {
    cyclesData.forEach((cycle,index) => {
      setCiclos(ciclos => [...ciclos, <CycleCard key={index} cycle={cycle}/>])
    })
  }




  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 ">
        {/* <div className="flex justify-between" >
          <div className="">
            <h2 className="p-3 text-center font-bold text-2xl">Peliculas</h2>
            <MovieCarousel />
          </div>

          <Noticias/>
        </div> */}
        <h2 className='text-center font-bold text-2xl pb-4'>Ciclos</h2>
        <Carousel itemClass='flex justify-center' responsive={responsive} className="mx-auto mb-32 max-w-7xl" >
          {ciclos}
        </Carousel>
        <h2 className='text-center font-bold text-2xl pb-4'>Calendario de este mes</h2>
        {movieCards.length > 0 ? <Calendar movies={movieCards}/>: <h1>Loading...</h1>}

      </div>
      <Footer/>
    </Layout>
  )
}

export default Home
