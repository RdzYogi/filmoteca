import React, { useState, useEffect } from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import Noticias from '../../components/home/Noticias'
import MovieCard from '../../components/shared/MovieCard'
import MovieCarousel from '../../components/home/MovieCarousel'

function Home() {
  const [movies, setMovies] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch("/api/v1/movies")
    .then((response) => response.json())
    .then((data) => {
      let newMovies = []
      data.map((movie,index) => {
        newMovies = [...newMovies, <MovieCard key={index} movie={movie} cycle={movie.include.cycle}/>]
      })
      setMovies(newMovies)
      setLoaded(true)
      });
  }, [])


  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 container">
        <div className="flex justify-between" >
          <div className="">
            <h2 className="p-3 text-center font-bold text-2xl">Peliculas</h2>
            <div className='w-2/3'>
            {/* {loaded ? movies : <h1>Loading...</h1>} */}
            <MovieCarousel />
            </div>
          </div>

          <Noticias/>
        </div>

      </div>
      <Footer/>
    </Layout>
  )
}

export default Home
