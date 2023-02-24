import React, { useState } from "react";
import { Link } from "react-router-dom";
import getDateObject from "../helpers/getDateObject";

const DESCRIPTIONMAX = 250

function MovieCard(props){
  const movie = props.movie.movie

  const cycle = props.cycle

  const hall = props.movie.include.hall

  const showDateString = props.movie.include.session.play_time

  const options ={monthLong: true}
  const showDateObject = getDateObject(showDateString, options)

  return (
    <div className="box-border border border-black h-96 w-4/5 overflow-hidden">
      <Link to={"/movies/" + movie.slug}>
        <div className={"p-1 bg-"+cycle.color}>
          <p className="text-center font-bold text-xl">{movie.title}</p>
          <p className="text-center font-bold text-xl">{cycle.name}</p>
          <div className="text-center font-bold text-l">{movie.director} ({movie.year})</div>
        </div>
      </Link>
      <div className={"bg-black pl-2 pr-2 pt-1 pb-1"}>
        <div className={"flex justify-between place-items-center text-xs text-"+cycle.color}>
          <p className="">{showDateObject.day} de {showDateObject.month}</p>
          <div className={"h-px w-1/12 self-center bg-"+cycle.color}></div>
          <p className="">{showDateObject.hour+":"+showDateObject.minutes}h</p>
          <div className={"h-px w-1/12 self-center bg-"+cycle.color}></div>
          <p className="">{hall.name}</p>
          <p className={"text-black font-bold p-1 bg-"+cycle.color}>Comprar</p>
        </div>
      </div>
      <img className="object-cover w-screen" src={movie.img_url} alt={movie.title}/>
      <Link to={"/movies/" + movie.slug}>
        <p className="text-justify p-2">{
          movie.description.length > DESCRIPTIONMAX ? movie.description.slice(0, DESCRIPTIONMAX) + "..." : movie.description}
        </p>
      </Link>
    </div>
  );
}

export default MovieCard;
