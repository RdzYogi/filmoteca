import React, { useState, useEffect } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import MovieCard from "../shared/MovieCard";

function MovieCarousel() {
  const [movies, setMovies] = useState([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/v1/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        // let newMovies = [];
        // data.map((movie, index) => {
        //   newMovies = [
        //     ...newMovies,
        //     <MovieCard key={index} movie={movie} cycle={movie.include.cycle} />,
        //   ];
        // });
        // setMovies(newMovies);
        // setLoaded(true);
      });
  }, []);

  return (
    <div className="w-full flex">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 900,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {movies.map((movie, index) => {
          return (
            <MovieCard key={index} movie={movie} cycle={movie.include.cycle} />
          );
        })}
      </ReactSimplyCarousel>
    </div>
  );
}

export default MovieCarousel;
