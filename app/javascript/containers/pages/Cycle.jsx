import React from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import MovieCard from '../../components/cycle-show/MovieCard'

function Cycle() {
  return (
    <Layout>
      <Navbar/>
      <div className="pt-40">
        <h2>{cycle.name}</h2>
        <p>{cycle.description}</p>
      </div>
        {cycle.movies.filter(movie.cycle === cycle.id).forEach(movie => <MovieCard />)}
      <Footer/>
    </Layout>
  )
}

export default Cycle
