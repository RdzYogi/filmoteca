import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import MovieCard from '../../components/shared/MovieCard'
import { useSelector } from 'react-redux';

function Cycle() {
    // Get the slug from the URL
    let params = useParams()
    const slug = params.slug;
    // We declare a state so we can store the data from the API
    const moviesData = useSelector(state => state.dataManager.movies)
    const cyclesData = useSelector(state => state.dataManager.cycles)

    const [cycleData, setCycleData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [movies, setMovies] = useState([])
    useEffect(() => {
      if (cyclesData.length === 0 || moviesData.length === 0) return
      console.log("triggered")
      let cycle = cyclesData.find(cycle => cycle.slug === slug)
      setCycleData(cycle)
      setLoaded(true)

      moviesData.map((movie,index) => {
        if (movie.include.cycle.slug === slug) {
          setMovies(movies => [...movies, <MovieCard key={index} movie={movie} cycle={cycle}/>])
        }
      })

    }, [moviesData,cyclesData])
  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 w-full mx-auto pb-1 my-6">
        {/* First check if the data is loaded, then render */}
        { loaded &&
          <Fragment>
            <div className='mx-auto w-[90%]'>
              <h2 className={"text-center font-bold text-2xl	pt-2 pb-2 bg-" + cycleData.color}>{cycleData.name}</h2>
              <p className="text-justify mt-3 mb-7">{cycleData.description}</p>
              <p className="text-center mt-3 mb-7 font-bold text-lg">Peliculas del ciclo</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
              {/* {movies} */}
              {loaded ? movies : <div className="text-center">Cargando...</div>}
            </div>
          </Fragment>
        }
      </div>
      <Footer/>
    </Layout>
  )
}

export default Cycle
