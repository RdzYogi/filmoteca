import React, {useEffect, useState} from 'react';
import Footer from '../../components/navigation/Footer';
import Navbar from '../../components/navigation/Navbar';
import Layout from '../../hocs/layouts/Layout';
import CycleDB from '../../components/adminDB/CycleDB';
import MovieDB from '../../components/adminDB/MovieDB';



import Label from '../../components/adminDB/label'
import Input from '../../components/adminDB/input'
import SubmitButton from '../../components/shared/SubmitButton';
import axios from "axios";

const client = axios.create({
  baseURL: `/api/v1/movies/`
});

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
      <Navbar/>
      <div className='pt-40 p-4 max-w-7xl mx-auto pb-1 my-6 md:px-12'>
        <h2 className="text-center text-2xl font-bold">Admin Database</h2>

        <p>TODOS LOS CICLOS</p>
        {ciclos}

        <p>TODAS LOS PELICULAS</p>
        {movies}

        {/* previous and next buttons */}
      </div>
      <Footer/>
    </Layout>
  )
}

export default AdminDB
