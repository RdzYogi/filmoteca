import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import DownloadButton from "../../components/shared/DownloadButton";
import MovieCard from "../../components/shared/MovieCard";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

function Movie() {
  let params = useParams();
  const slug = params.slug;
  const [cycleData, setCycleData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(`/api/v1/movies/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setCycleData(data)
        setMovie(data);
        setLoaded(true);
      });
  }, []);
  // console.log(movie.movie.description)
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
          <DownloadButton />
        </div>
        {loaded ?
        <div className="m-5">
          <h1 className="pt-20 text-2xl font-roboto text-black-900 text-left font-bold">{movie.movie.title}</h1>
          <h2 className="text-1xl font-roboto text-black-900 text-left">{movie.movie.director}</h2>
          <h3 className="text-1xl font-roboto text-black-900 text-left">{movie.movie.year}</h3>
        </div> : "loading ..."}
        {loaded ?
        <div id="aqui es donde meto todo mi CODIGO">
          <img
            src= {movie.movie.img_url}
            className="m-5 w-2/3"
            alt="película"
            />
        </div> : "loading..."}
        <div className="m-5 w-2/3 text-black-500 text-justify">
          {loaded ? movie.movie.description : "loading.."}
        </div>
        <h2 className="pt-20 text-xl font-large font-bold text-black-900 m-2">
          MAS PELICULAS DEL CICLO
        </h2>
        <div className="m-5">
              <div className="pt-25 grid grid-cols-3 gap-6 w-2xl h-60 ">
                <div className="col-span-1  bg-gray-400"></div>
                <div className="col-span-1  bg-gray-400"></div>
                <div className="col-span-1  bg-gray-400"></div>
              </div>
      </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default Movie;
