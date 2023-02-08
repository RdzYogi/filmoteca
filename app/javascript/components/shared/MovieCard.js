import React, { useState } from "react"
import { Navigate } from "react-router-dom"

function MovieCard(movieData){

  const movie = movieData.movie
  const movieTitle = movie.movie.title
  const movieDirector = movie.movie.director
  const movieYear = movie.movie.year
  const movieDescription = movie.movie.description
  const cycleColor = movie.include.cycle.color
  const showDateString = movie.include.session.play_time
  const showDate = new Date(showDateString)
  const optionMonth = { month: 'long' };
  const showDateMonth = new Intl.DateTimeFormat('es-ES',optionMonth).format(showDate)
  const showDateDay = showDate.getDay()
  // Get hours and minutes from the specified date
  const showDateTime = showDate.toLocaleTimeString('es-ES',{hour: '2-digit',minute: '2-digit', hour12: false});
  const hall = movie.include.hall.name

  return (
    <div className="border border-black">
      <div className={"p-1 bg-"+cycleColor}>
        <p className="text-center font-bold text-xl">{movieTitle}</p>
        <div className="text-center font-bold text-l">{movieDirector} ({movieYear})</div>
      </div>
      {/* <p className="text-center">{movieDirector} {movieYear}</p> */}
      {/* {movie.session.datetime.forEach(date =>{ */}
        {/*
        <div className="flex text-xs bg-black text-white pl-2 pr-2 pt-1 pb-1 justify-between items-center">
        <p>{date}</p>
        <p>{movie.hall}</p>
        <p className="font-bold bg-green-700 p-1 "><button>Comprar</button></p>
        */}
      {/* })} */}
      {/* <img src="movie.img_url" alt={movie.title}> */}
      <div className={"bg-black pl-2 pr-2 pt-1 pb-1"}>
        <div className={"flex justify-between place-items-center text-"+cycleColor}>
          <p className="">{showDateDay} de {showDateMonth}</p>
          <p className="">{showDateTime}h</p>
          <p className="">{hall}</p>
          <p className={"text-black font-bold p-1 bg-"+cycleColor}>Comprar</p> {/*delete later*/}
        </div>
      </div>
      <img className="object-cover w-screen" src="https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM="/>  {/*delete later*/}
      <p className="text-justify p-2">{movieDescription}</p>
    </div>
  )
}

export default MovieCard
