import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import DownloadButton from "../../components/shared/DownloadButton";
import getDateObject from "../../components/helpers/getDateObject";
import { useSelector } from "react-redux";
import MovieCard from "../../components/shared/MovieCard";
import Carousel from "react-multi-carousel";
import LeftArrow from "../../components/carousel/LeftArrow";
import RightArrow from "../../components/carousel/RightArrow";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1
  }
}

function Movie() {
  // Get the slug from the URL
  let params = useParams()
  const slug = params.slug;
  // console.log(slug)
  // We declare a state so we can store the data from the API
  const [projectionsData, setProjectionsData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [movies, setMovies] = useState([])
  const [mainMovie, setMainMovie] = useState({})
  const moviesData= useSelector(state => state.dataManager.movies)
  useEffect(() => {

    fetch(`/api/v1/movies/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.include.projections)
        data.include.projections.forEach(projection => {
          // console.log(projection)
          //console.log(getDateObject(projection.include.session.play_time, {dayLong: true, monthLong: true}))
          const dateObject = getDateObject(projection.include.session.play_time, {dayLong: true, monthLong: true})
          const dateObjectDay = getDateObject(projection.include.session.play_time, {monthLong: true})
          const capitalizedDay = dateObject.day.charAt(0).toUpperCase() + dateObject.day.slice(1)
          setProjectionsData(projectionsData => [...projectionsData,
            <div className="border-t-2 border-t-gray-800 mb-5" key={projection.projection.id}>
              <h3 className="pt-3 mx-2 font-bold">{projection.include.hall.name}</h3>
              <h3 className="pt-3 mx-2">{capitalizedDay + ", " + dateObjectDay.day + " de " + dateObject.month + " " + dateObject.year}</h3>
              <h3 className="py-3 mx-2">{dateObject.hour + ":" + dateObject.minutes}</h3>
              <button className="font-bold px-3 py-2 mx-auto bg-black text-slate-100">Comprar</button>
            </div>
          ])
        });
        setMainMovie(data)
        setLoaded(true)
      });
  }, [])
  useEffect(() => {
    if (moviesData.length === 0 || Object.keys(mainMovie).length === 0 ) return
    //console.log(moviesData)
    const currentCycle = mainMovie.include.cycle.id
    moviesData.forEach((movie, index) => {
      if (movie.include.cycle.id === currentCycle){
        console.log(movie)
        setMovies(prev => [...prev, <MovieCard key={index} movie={movie} cycle={movie.include.cycle}/> ])

      }
    })
  }, [moviesData, mainMovie])

  return (
    <Layout>
      <Navbar />
      <div className="pt-40">
        {loaded &&
        <div className="w-full mx-auto md:max-w-7xl">
          <div className="flex flex-col-reverse sm:flex-row first:items-center sm:justify-between md:items-center">
            <div className="flex my-7">
              <div className={"w-4 bg-"+mainMovie.include.cycle.color}></div>
              <div className="ml-3">
                <h3 className="h3 pt-1 font-bold">{mainMovie.include.cycle.name}</h3>
                <h3 className="h3 py-2 font-bold text-xl">{mainMovie.movie.title}</h3>
                <h3 className="h3 pb-1 font-medium">{mainMovie.movie.director+" ("+ mainMovie.movie.year+")"} </h3>
              </div>
            </div>
          <DownloadButton />
          </div>
          <div className="flex flex-col sm:flex-row mb-16">
            <div className="w-full sm:w-3/4">
              <img src={mainMovie.movie.img_url} className="aspect-video w-4xl object-cover" alt={mainMovie.movie.title}/>
              <p className="w-4xl my-5">{mainMovie.movie.description}</p>
            </div>
            <div className="w-full sm:w-1/4 ml-5">
              <h3 className="text-center font-bold text-lg text-gray-800 pb-5">PASES</h3>
              {projectionsData}
            </div>
          </div>
          <div>
            <h3 className="text-center font-bold text-xl text-gray-800 pb-5">OTRAS PELÍCULAS DEL CICLO</h3>
            <Carousel customLeftArrow={<LeftArrow/>} customRightArrow={<RightArrow/>} itemClass='flex justify-center' responsive = {responsive} className="mx-auto mb-32 max-w-7xl">
              {movies}
            </Carousel>
          </div>
        </div>
        }
      </div>
      <Footer />
    </Layout>
  );
}

export default Movie;
