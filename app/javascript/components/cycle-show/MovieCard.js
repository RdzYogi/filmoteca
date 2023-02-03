import React, { useState } from "react"
import { Navigate } from "react-router-dom"

function MovieCard(props){
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.director} {props.year}</p>
      {props.session.datetime.forEach(date =>{
        <p>{date} - {props.hall} - <button>comprar</button></p>
      })}
      <img src={props.img_url} alt={props.title}/>
      <p>{props.description}</p>
    </div>
  )
}

export default MovieCard
