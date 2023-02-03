import React, { useState } from "react"
import { Navigate } from "react-router-dom"

function MovieCard(movie){
  return (
    <div>
      <p>{movie.title}</p>
      <p>{movie.director} {movie.year}</p>
      {movie.session.datetime.forEach(date =>{
        <p>{date} - {movie.hall} - <button>comprar</button></p>
      })}
      <img src={movie.img_url} alt={movie.title}/>
      <p>{movie.description}</p>
    </div>
  )
}

export default MovieCard
