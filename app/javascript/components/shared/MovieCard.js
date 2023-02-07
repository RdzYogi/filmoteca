import React, { useState } from "react"
import { Navigate } from "react-router-dom"

function MovieCard(movieData){

  const movie = movieData.movie
  const movieTitle = movie.movie.title
  const cycleColor = movie.include.cycle.color
  // // const movieDirector = movie.director
  // // const movieYear = movie.year
  console.log(movie.include.cycle.color)

  const showDateString = movie.include.session.play_time
  const showDate = new Date(showDateString)
  const optionMonth = { month: 'long' };
  const showDateMonth = new Intl.DateTimeFormat('es-ES',optionMonth).format(showDate)
  const showDateDay = showDate.getDay()
  const showDateTime = showDate.getHours() + ':' + showDate.getMinutes()
  const hall = movie.include.hall.name

  return (
    <div className="border border-black">
      <div className={"bg-"+cycleColor}>
        <p className="text-center font-bold text-xl">{movieTitle}</p>
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
      <div className={"flex text-xs bg-black pl-2 pr-2 pt-1 pb-1 justify-between items-center text-white"}>
        <div className={"flex justify-between text-"+cycleColor}>
          <p>{showDateDay} {showDateMonth}</p>
          <p>{showDateTime}h</p>
          <p>{hall}</p>
        </div>

        <p className="font-bold bg-green-700 p-1 ">Comprar</p> {/*delete later*/}
      </div>
      <img className="object-cover w-screen" src="https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM="/>  {/*delete later*/}
      <p className="text-justify p-2">{movie.description}</p>
    </div>
  )
}

export default MovieCard
