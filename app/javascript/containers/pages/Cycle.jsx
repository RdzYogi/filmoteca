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
    // We declare a state so we can store the data from the API
    const [cycleData, setCycleData] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
      fetch(`http://localhost:3000/api/v1/cycles/${slug}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data)
          // We set the state with the new array
          // and we set loaded to true so we can render the data
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
              {/* {props.movies.filter(movie.cycle === props.id).forEach(movie => { */}
                {/* <MovieCard movie={movie}/> */}
              {/* })} */}
              <MovieCard
                title="Magnificent Obsession"
                director="Douglas Sirk"
                year="1954"
                hall="Sala 1"
                description="Un panadero que se ha hecho rico monta una fábrica de pasta. Un amigo, harto de su superficialidad, decide gastarle una broma y le cuenta que un príncipe va a ir a visitarla. Debut en el largometraje de Detlef Sierck/ Douglas Sirk, siguiendo el sistema de dobles versiones tan común en la época fue rodada también en holandés, aunque esa versión se ha perdido."
              />
              <MovieCard
                title="Magnificent Obsession"
                director="Douglas Sirk"
                year="1954"
                hall="Sala 1"
                description="Un panadero que se ha hecho rico monta una fábrica de pasta. Un amigo, harto de su superficialidad, decide gastarle una broma y le cuenta que un príncipe va a ir a visitarla. Debut en el largometraje de Detlef Sierck/ Douglas Sirk, siguiendo el sistema de dobles versiones tan común en la época fue rodada también en holandés, aunque esa versión se ha perdido."
              />
              <MovieCard
                title="Magnificent Obsession"
                director="Douglas Sirk"
                year="1954"
                hall="Sala 1"
                description="Un panadero que se ha hecho rico monta una fábrica de pasta. Un amigo, harto de su superficialidad, decide gastarle una broma y le cuenta que un príncipe va a ir a visitarla. Debut en el largometraje de Detlef Sierck/ Douglas Sirk, siguiendo el sistema de dobles versiones tan común en la época fue rodada también en holandés, aunque esa versión se ha perdido."
              />
            </div>
          </Fragment>
        }
      </div>
      <Footer/>
    </Layout>
  )
}

export default Cycle
