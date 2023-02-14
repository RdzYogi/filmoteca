import React, { useState, useEffect } from "react";
import MovieCard from "../shared/MovieCard";

function MovieCarousel() {
  const [movies, setMovies] = useState([]);

  // Fetching data and setting state

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  // useEffect(() => {
  //   console.log(movies);
  // }, [movies]);

  return (
    <div className="p-3">
      {/* Movie Carousel section. TODO: create carrousel add moviecards  */}
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}

export default MovieCarousel;
