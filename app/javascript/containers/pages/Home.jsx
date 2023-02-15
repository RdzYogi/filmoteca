import React, { useEffect, useState } from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import Noticias from '../../components/home/Noticias'
import MovieCarousel from '../../components/home/MovieCarousel'
import Carousel from '../../components/home/Carousel'
import CycleCard from '../../components/shared/CycleCard'

function Home() {
  const [ciclos, setCiclos] = useState([])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    fetch('api/v1/cycles')
      .then((response) => response.json())
      .then((data) => {
        data.map((cycle,index) => {
          setCiclos(ciclos => [...ciclos, <CycleCard key={index} cycle={cycle}/>])
        })
        setLoaded(true)
      });
  }, [])
  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 ">
        <div className="flex justify-between" >
          <div className="">
            <h2 className="p-3 text-center font-bold text-2xl">Peliculas</h2>
            {/* <MovieCarousel /> */}
          </div>

          {/* <Noticias/> */}
        </div>
        <div className="mx-auto mb-32 max-w-7xl">
          <Carousel slides={ciclos} />

        </div>

      </div>
      <Footer/>
    </Layout>
  )
}

export default Home
