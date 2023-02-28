import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import DownloadButton from '../../components/shared/DownloadButton'
import Layout from '../../hocs/layouts/Layout'
import MovieCard from '../../components/shared/MovieCard'


function Cartelera() {
  const [movies, setMovies] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleChange = (e) => {
    e.preventDefault()
    setSearchQuery(e.target.value)
    // console.log(e.target.value)
    let newMovies = []
    movies.map((movie) => {
      // console.log(movie.props)
      if (movie.props.movie.movie.title.toLowerCase().includes(searchQuery.toLowerCase()) || movie.props.movie.movie.director.toLowerCase().includes(searchQuery.toLowerCase())) {
        newMovies = [...newMovies, movie]
      }
    })
    setSearchResults(newMovies)
  }
  useEffect(() => {
    fetch("api/v1/movies")
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
      <div className="pt-40 max-w-7xl mx-auto pb-1 my-6">
        <div className="flex justify-center">
          <div>
            <h1 className="text-center font-bold text-xl">CARTELERA</h1>
            <div className="mt-4">
              <DownloadButton/>
            </div>
          </div>
        </div>
        <div className="flex justify-center max-w-7xl mx-auto my-6">
          <input onChange={handleChange} type="search" className="border-solid border-gray-300 focus:ring-gray-300 focus:border-gray-100 w-6/12 md:w-5/12 lg:w-4/12" placeholder="Buscar por Titulo o Director" />
        </div>
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-4">
          {loaded ?
          <>
            {searchQuery === "" ? movies : searchResults}
          </>
          : <h1>Loading...</h1>}
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Cartelera
