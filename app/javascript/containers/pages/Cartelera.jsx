import React, { useEffect, useState } from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import DownloadButton from '../../components/shared/DownloadButton'
import Layout from '../../hocs/layouts/Layout'
import MovieCard from '../../components/shared/MovieCard'


function Cartelera() {
  const [movies, setMovies] = useState([])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      let newMovies = []
      data.map((movie,index) => {
        // console.log(movie)
        newMovies = [...newMovies, <MovieCard key={index} movie={movie}/>]
      })
      setMovies(newMovies)
      setLoaded(true)
      });
  }, [])
  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 mx-40">
        <div className="flex justify-center">
          <div className="">
            <h1 className="text-2xl font-bold text-center">Cartelera</h1>
            <div className="absolute top-40 right-40">
              <DownloadButton/>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <div>Ciclos dropdown</div>
          <div>dd/mm/yyyy</div>
          <div>Buscar peliculas</div>
        </div>
        <div>
          {loaded ? movies : <h1>Loading...</h1>}
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Cartelera
