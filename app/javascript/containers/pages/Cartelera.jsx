import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import DownloadButton from '../../components/shared/DownloadButton'
import Layout from '../../hocs/layouts/Layout'
import MovieCard from '../../components/shared/MovieCard'
import { useSelector } from 'react-redux'


function Cartelera() {

  const [movies, setMovies] = useState([])
  const [cycles, setCycles] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectCycleValue, setSelectCycleValue] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const moviesData = useSelector(state => state.dataManager.movies)
  const cyclesData = useSelector(state => state.dataManager.cycles)

  if (cyclesData.length > 0 && cycles.length === 0) {
    cyclesData.forEach((cycle,index) => {
      setCycles(cycles => [...cycles, <option key={index+cycle.slug} value={cycle.slug}>{cycle.name}</option>])
    })
  }
  if (moviesData.length > 0 && movies.length === 0) {
    moviesData.forEach((movie,index) => {
      setMovies(prev => [...prev, <MovieCard key={index} movie={movie} cycle={movie.include.cycle}/> ])
    })
    setLoaded(true)
  }

  const handleChange = (e) => {
    e.preventDefault()
    const query = document.getElementById('movie-search').value
    setSearchQuery(query)
    const selectValue = document.getElementById('select-cycle').value
    setSelectCycleValue(selectValue)
    let newMovies = []
    movies.map((movie) => {
      // console.log(movie.props)

      if(movie.props.movie.movie.title.toLowerCase().includes(query.toLowerCase()) || movie.props.movie.movie.director.toLowerCase().includes(query.toLowerCase())) {
        if (selectValue === "") {
          // console.log("empty select",movie)
          newMovies = [...newMovies, movie]
        } else if (movie.props.cycle.slug === selectValue) {
          newMovies = [...newMovies, movie]
        }
      }
    })
    setSearchResults(newMovies)
  }

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
          <input id="movie-search" onChange={handleChange} type="search" className="border-solid border-gray-300 focus:ring-gray-300 focus:border-gray-100 w-6/12 md:w-5/12 lg:w-4/12" placeholder="Buscar por Titulo o Director" />
          <select id="select-cycle" onChange={handleChange} className="border-solid border-gray-300 focus:ring-gray-300 focus:border-gray-100 w-6/12 md:w-5/12 lg:w-4/12">
            <option value="">Todos los ciclos</option>
            {cycles}
          </select>
        </div>
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-4">
          {loaded ?
          <>
            {searchQuery === "" && selectCycleValue === "" ? movies : searchResults}
          </>
          : <h1>Loading...</h1>}
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Cartelera
