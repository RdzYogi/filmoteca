import React from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import Noticias from '../../components/home/Noticias'

function Home() {

  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 container">
        <div className="flex justify-between" >
          <div className="">
            <h2 className="">Peliculas</h2>
            <div>Pelicula card</div>
          </div>
          <Noticias/>
        </div>

      </div>
      <Footer/>
    </Layout>
  )
}

export default Home
