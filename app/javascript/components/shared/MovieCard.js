import React, { useState } from "react";
import getDateObject from "../helpers/getDateObject";


function MovieCard(props){

  const movie = props.movie.movie

  const cycle = props.cycle

  const hall = props.movie.include.hall

  const showDateString = props.movie.include.session.play_time

  const options ={monthLong: true}
  const showDateObject = getDateObject(showDateString, options)

  return (
    <div className="border border-black h-5/6 w-80">
      <div className={"p-1 bg-"+cycle.color}>
        <p className="text-center font-bold text-xl">{movie.title}</p>
        <div className="text-center font-bold text-l">{movie.director} ({movie.year})</div>
      </div>
      <div className={"bg-black pl-2 pr-2 pt-1 pb-1"}>
        <div className={"flex justify-between place-items-center text-xs text-"+cycle.color}>
          <p className="">{showDateObject.day} de {showDateObject.month}</p>
          <div className='h-px w-1/4 bg-white self-center'></div>
          <p className="">{showDateObject.hour+":"+showDateObject.minutes}h</p>
          <p className="">{hall.name}</p>
          <p className={"text-black font-bold p-1 bg-"+cycle.color}>Comprar</p>
        </div>
      </div>
      <img className="object-cover w-screen" src="https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM="/>  {/*delete later*/}
      <p className="text-justify p-2">{movie.description}</p>
    </div>
  );
}

export default MovieCard;
