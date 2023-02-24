import React, { useEffect, useState } from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import NewsCard from '../../components/shared/NewsCard'

function Noticias() {
  const [news, setNews] = useState([])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    fetch("api/v1/news")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      let newNews = []
      data.map((noticia, index) => {
        console.log(noticia)
        newNews = [...newNews, <NewsCard key={index} noticia={noticia}/>]
      })
      setNews(newNews)
      setLoaded(true)
    });
  }, [])
  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 mx-auto max-w-7xl">
        <div className="flex justify-center">
            <h1 className="text-xl font-bold text-center">NOTICIAS</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-4 mx-10">
          {loaded ? news : <div className="text-center">Cargando...</div>}
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Noticias
