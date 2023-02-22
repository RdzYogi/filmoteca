import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import MovieCard from '../../components/shared/MovieCard'

function Cycle() {
    // Get the slug from the URL
    let params = useParams()
    const slug = params.slug;
    // We declare a state so we can store the data from the APIç

    const [cycleData, setCycleData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [movies, setMovies] = useState([])
    useEffect(() => {
      fetch(`http://localhost:3000/api/v1/cycles/${slug}`)
        .then((response) => response.json())
        .then((data) => {
          data.movies.map((movie,index) => {
            setMovies(movies => [...movies, <MovieCard key={index} movie={movie} cycle={data.cycle}/>])
          })
          setCycleData(data)
          setLoaded(true)
        });
    }, [])
  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 max-w-7xl mx-auto pb-1 my-6">
        {/* First check if the data is loaded, then render */}
        { loaded &&
          <Fragment>
            <h2 className={"text-center font-bold text-2xl	pt-2 pb-2 bg-" + cycleData.cycle.color}>{cycleData.cycle.name}</h2>
            <p className="text-justify mt-3 mb-7">{cycleData.cycle.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {movies}
            </div>
          </Fragment>
        }
      </div>
      <Footer/>
    </Layout>
  )
}

export default Cycle
