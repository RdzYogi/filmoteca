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
      // console.log(data)
      let newNews = []
      data.map((noticia, index) => {
        // console.log(noticia)
        newNews = [...newNews, <NewsCard key={index} noticia={noticia}/>]
      })
      setNews(newNews)
      setLoaded(true)
    });
  }, [])
  return (
    <Layout>
      <Navbar/>
      <div className="pt-40">
        {loaded ? news : <div className="text-center">Cargando...</div>}
      </div>
      <Footer/>
    </Layout>
  )
}

export default Noticias
