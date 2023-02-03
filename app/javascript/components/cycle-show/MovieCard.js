import React, { useState } from "react"
import { Navigate } from "react-router-dom"

function MovieCard(props){
  return (
    <div className="border border-black">
      <p className="text-center font-bold text-xl">{props.title}</p>
      <p className="text-center">{props.director} ({props.year})</p>
      {/* {props.session.datetime.forEach(date =>{ */}
        {/*
        <div className="flex text-xs bg-black text-white pl-2 pr-2 pt-1 pb-1 justify-between items-center">
        <p>{date}</p>
        <p>{props.hall}</p>
        <p className="font-bold bg-green-700 p-1 "><button>Comprar</button></p>
        */}
      {/* })} */}
      <div className="flex text-xs bg-black text-white pl-2 pr-2 pt-1 pb-1 justify-between items-center">
        <p>17 enero</p> {/*delete later*/}
        <p>18:00h</p> {/*delete later*/}
        <p>{props.hall}</p> {/*delete later*/}
        <p className="font-bold bg-green-700 p-1 ">Comprar</p> {/*delete later*/}

      </div>
      {/* <img src={props.img_url} alt={props.title}/> */}
      <p className="text-justify">{props.description}</p>
    </div>
  )
}

export default MovieCard
