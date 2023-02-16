import React, { useEffect, useState } from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import CycleCard from '../../components/shared/CycleCard'
import MovieCard from '../../components/shared/MovieCard'
// For carousel documentation see react multi carousel git repo
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Home() {
  const [ciclos, setCiclos] = useState([])
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch('api/v1/cycles')
      .then((response) => response.json())
      .then((data) => {
        data.map((cycle,index) => {
          setCiclos(ciclos => [...ciclos, <CycleCard key={index} cycle={cycle}/>])
        })
      });
    fetch("api/v1/movies")
    .then((response) => response.json())
    .then((data) => {
      let newMovies = []
      data.map((movie,index) => {
        newMovies = [...newMovies, <MovieCard key={index} movie={movie} cycle={movie.include.cycle}/>]
      })
      setMovies(newMovies)
      });
  }, [])
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
        <div className="mx-auto mb-32 max-w-7xl">
          <Carousel responsive={responsive} >
            {ciclos}
          </Carousel>
        </div>
        <h2 className='text-center font-bold text-2xl pb-4'>Peliculas</h2>
        <div className="mx-auto mb-32 max-w-7xl">
          <Carousel responsive={responsive} >
            {movies}
          </Carousel>
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Home
