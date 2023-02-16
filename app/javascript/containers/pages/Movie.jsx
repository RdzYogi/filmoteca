import React, {Fragment, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import DownloadButton from '../../components/shared/DownloadButton';
import MovieCard from '../../components/shared/MovieCard';

function Movie() {

  let params = useParams()
  const slug = params.slug;
  // We declare a state so we can store the data from the API
  const [cycleData, setCycleData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [movies, setMovies] = useState([])
  useEffect(() => {
    let moviesData = []
    fetch(`http://localhost:3000/api/v1/cartelera/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        data.movies.map((movie,index) => {
          moviesData = [...moviesData, <MovieCard key={index} movie={movie} cycle={data.cycle}/>]
        })
        setMovies(moviesData)
        // We set the state with the new array
        // and we set loaded to true so we can render the data
        setCycleData(data)
        setLoaded(true)
      });
  }, [])

  return (
    <Layout>
      <Navbar />
      <div className="pt-40">
        <div className="flex space-x-2 justify-left">
        <button className="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-black-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-250 ease-in-out">
            Atras
        </button>
        </div>
        <div className="lg:absolute lg:top-40 lg:right-40">
          <DownloadButton/>
        </div>
        <div className="container m-5">
          <div className="text-xl font-large text-black-900 m-2">
            <div className="float-right h-80 w-80 bg-white">
              <h2 className="m-5 text-sm text-black underline font-bold">PASES</h2>
                <ul className="list-disc m-5 text-sm text-black">
                  <li>SALA 1</li>
                    <li>FECHA</li>
                    <li>HORA</li>
                  </ul>
          <button className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-black-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-250 ease-in-out">
            Comprar
          </button>
          <ul className="list-disc m-5 text-sm text-black">
                  <li>SALA 1</li>
                    <li>FECHA</li>
                    <li>HORA</li>
                  </ul>
          <button className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-black-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-250 ease-in-out">
            Comprar
          </button>
          </div>
          <h2 className="m-5 pt-20 text-2xl font-bold text-black-900">
            EL PADRINO
          </h2>
          <h3 className="m-5 text-sm text-primary-500">
            Frank Ford Coppola • <time>18 Nov 2022</time>
          </h3>
        </div>
      </div>
      <div className="m-10 max-w-2xl">
        <img src="https://i1.wp.com/www.anim-arte.com/wp-content/uploads/2013/02/el-padrino.jpg?fit=1920%2C1080"
          className="aspect-video w-full object-cover" alt="Imagen El Padrino"/>
        <div className="container px-50 color-green"></div>
        <div className="m-5 col-start-4 max-w-2xl object-cover">
        {cycleData.cycle.description}
        </div>
          <p className="m-5 max-w-2xl text-black-500 text-justify">
            América, años 40. Don Vito Corleone (Marlon Brando) es el respetado
            y temido jefe de una de las cinco familias de la mafia de Nueva
            York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny
            (James Caan), el pusilánime Fredo (John Cazale) y Michael (Al
            Pacino), que no quiere saber nada de los negocios de su padre.
            Cuando Corleone, en contra de los consejos de 'Il consigliere' Tom
            Hagen (Robert Duvall), se niega a participar en el negocio de las
            drogas, el jefe de otra banda ordena su asesinato. Empieza entonces
            una violenta y cruenta guerra entre las familias mafiosas.
          </p>
        <div className="m-5">
          <h2 className="pt-20 text-xl font-large font-bold text-black-900 m-2">
            MAS PELICULAS DEL CICLO
          </h2>
          <div className="pt-25 grid grid-cols-3 gap-6 w-2xl h-60 ">
            <div className="col-span-1  bg-gray-400">Pelicula 1</div>
            <div className="col-span-1  bg-gray-400">Pelicula 2</div>
            <div className="col-span-1  bg-gray-400">Pelicula 3</div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default Movie;
