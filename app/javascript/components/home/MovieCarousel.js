import React, { useState, useEffect } from "react";
import MovieCard from "../shared/MovieCard";

function MovieCarousel() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/movies")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMovies(data);
      });
  }, []);

  // useEffect(() => {
  //   console.log(movies);
  // }, [movies]);

  return (
    <div>
      {/* Movie Carousel section. TODO: connect db. create carrousel add moviecards  */}
      {movies.map((movie) => (
        <MovieCard className="w-2/3 p-2 h-4" movie={movie} />
      ))}
    </div>
  );
}

export default MovieCarousel;
