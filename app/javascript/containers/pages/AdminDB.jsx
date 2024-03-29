import React, {useEffect, useState} from 'react';
import Footer from '../../components/navigation/Footer';
import CycleDB from '../../components/adminDB/CycleDB';
import MovieDB from '../../components/adminDB/MovieDB';

import CycleCreate from '../../components/adminDB/CycleCreate';
import MovieCreate from '../../components/adminDB/MovieCreate';


function AdminDB() {
  const [ciclos, setCiclos] = useState([])
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('/api/v1/cycles')
      .then((response) =>{
        return response.json()
      })
      .then((data) => {
        let newCyclesDB = []
        data.map((cycle, index) => {
          newCyclesDB = [...newCyclesDB, <CycleDB key={index} cycle={cycle}/>]
        })
        setCiclos(newCyclesDB)
      });
  }, [])

  useEffect(() => {
    fetch('/api/v1/movies')
      .then((response) =>{
        return response.json()
      })
      .then((data) => {
        let moviesDB = []
        data.map((movie, index) => {
          moviesDB = [...moviesDB, <MovieDB key={index} movie={movie}/>]
        })
        setMovies(moviesDB)
      });
  }, [])


  return (
    <Layout>
      <div className='pt-40 p-4 max-w-7xl mx-auto pb-1 my-6 md:px-12'>
        <h2 className="text-center text-2xl font-bold">Admin Database</h2>

        <p>TODOS LOS CICLOS</p>
        <CycleCreate />
        {ciclos}

        <p>TODAS LOS PELICULAS</p>
        {movies}
        <MovieCreate />

        {/* previous and next buttons */}
      </div>
    </Layout>
  )
}

export default AdminDB
