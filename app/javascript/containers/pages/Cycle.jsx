import React from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import MovieCard from '../../components/cycle-show/MovieCard'

function Cycle(props) {
  return (
    <Layout>
      <Navbar/>
      <div className="pt-40">
        <h1>This is Cycle show</h1>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
        {props.movies.filter(movie.cycle === props.id).forEach(movie => {
          <MovieCard {...movie}/>
        })}
      <Footer/>
    </Layout>
  )
}

export default Cycle
