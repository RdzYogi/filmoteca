import React from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import MovieCard from '../../components/shared/MovieCard'

function Cycle(props) {
  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 max-w-7xl mx-auto pb-1 my-6">
        <h2 className="text-center font-bold text-2xl	pt-2 pb-2 bg-green-700">Douglas Sirk. LA EMOCIÓN INMEDIATA</h2>{/* <h2>{props.name}</h2> */}
        <p className="text-justify mt-3 mb-7">¿Se puede decir algo nuevo sobre esta gran estrella del mundo del espectáculo español? ¿Queda algo que podamos apuntar acerca de una persona que rompió todos los moldes en un tiempo en el que ser notoria aludía a un horizonte no apto para las mujeres? ¿Puede alguien ser merecedora de la Gran Cruz de la Orden de Isabel Católica, otorgada en pleno franquismo, y de la muy democrática Medalla de Oro al Mérito en el trabajo? ¿Cómo puede una persona reunir en sí tantas posibilidades? Pionera de la resistencia frente a la violencia de género y adalid de una minoría étnica; cabeza incontestable de familia, pero amante fogosa del amor y la pasión sexual; voz alzada frente al mercado de la droga, pero ciudadana procesada por no cumplir con sus obligaciones fiscales; estrella popular, orgullosa de serlo, pero víctima también de esa fama</p>{/* <p>{props.description}</p> */}
        {/* {props.description.length > x-characters && <button>ver más</button>} */}
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
      </div>
      <Footer/>
    </Layout>
  )
}

export default Cycle
