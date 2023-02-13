import React from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import Noticias from '../../components/home/Noticias'
import DownloadButton from '../../components/shared/DownloadButton'
import MovieCarousel from '../../components/home/MovieCarousel'

function Home() {

  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 container">
        <div className="flex justify-between" >
          <div className="">
            <h2 className="p-3 text-center font-bold text-2xl">Peliculas</h2>
            <MovieCarousel />
          </div>
          {/* <DownloadButton /> */}
          <Noticias/>
        </div>

      </div>
      <Footer/>
    </Layout>
  )
}

export default Home
