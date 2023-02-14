import React, {useEffect, useState} from 'react';
import Footer from '../../components/navigation/Footer';
import Navbar from '../../components/navigation/Navbar';
import Layout from '../../hocs/layouts/Layout';
import CycleDB from '../../components/adminDB/CycleDB';
import MovieDB from '../../components/adminDB/MovieDB';

function AdminDB() {
  const [ciclos, setCiclos] = useState([])
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('/api/v1/cycles')
      .then((response) =>{
        return response.json()
      })
      .then((data) => {
        console.log(data)
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
        let newMoviesDB = []
        data.map((movie, index) => {
          newMoviesDB = [...newMoviesDB, <MovieDB key={index} movie={movie}/>]
        })
        setMovies(newMoviesDB)
      });
  }, [])


  return (
    <Layout>
      <Navbar/>
      <div className='pt-40 p-4 max-w-7xl mx-auto pb-1 my-6 md:px-12'>
        <h2 className="text-center text-2xl font-bold">Admin Database</h2>
        {ciclos}
        {movies}
      </div>
      <Footer/>
    </Layout>
  )
}

export default AdminDB
