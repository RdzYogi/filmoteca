import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getDateObject from "../helpers/getDateObject";

const DESCRIPTIONMAX = 240;

function MovieCard(props){
  // console.log(props)
  const [showDates, setShowDates] = useState([])
  const movie = props.movie.movie

  const cycle = props.cycle

  const options ={monthLong: true}
  // const showDateObject = getDateObject(showDateString, options)

  useEffect(() => {
    // console.log(props)
    props.movie.include.projections.map((projection,index) => {
      // console.log(projection)
      const hall = projection.include.hall
      const showDateObject = getDateObject(projection.include.session.play_time, options)
      setShowDates(showDates => [...showDates,
      <div key={index+"showTimes"} className={"flex justify-between place-items-center text-xs text-"+cycle.color}>
        <p className="">{showDateObject.day} de {showDateObject.month}</p>
        <div className={"h-px w-1/12 self-center" + (cycle.color.split(" ")[1] === "text-pink-cycle"?" bg-pink-cycle":" bg-"+cycle.color)}></div>
        <p className="">{showDateObject.hour+":"+showDateObject.minutes}h</p>
        <div className={"h-px w-1/12 self-center" + (cycle.color.split(" ")[1] === "text-pink-cycle"?" bg-pink-cycle":" bg-"+cycle.color)}></div>
        <p className="">{hall.name}</p>
        <p className={"font-bold p-1 bg-"+cycle.color + (cycle.color.split(" ")[0]==="black" ? "":" text-black") }>Comprar</p>
      </div>
      ])
    })
  }, [])

  return (
    <div className="box-border border border-black h-96 w-80 overflow-hidden">
      <Link to={"/movies/" + movie.slug}>
        <div className={"p-1 h-16 bg-"+cycle.color}>
          <p className="text-center font-bold text-sm">{movie.title}</p>
          <div className="text-center font-bold text-sm">{movie.director} {movie.year === "" ? "":"("+movie.year+")"}</div>
        </div>
      </Link>
        <div className={"pl-2 pr-2 pt-1 pb-1 h-16 flex-col flex justify-around gap-y-2 " + (cycle.color.split(" ")[0]==="black" ? "bg-white":"bg-black")}>
          {showDates}
        </div>
      <img className="object-cover w-screen h-36" src={movie.img_url} alt={movie.title}
        onError={({ currentTarget }) => {
          currentTarget.src = "https://via.placeholder.com/300x450.png?text=No+Image";
        }}
      />
      <Link to={"/movies/" + movie.slug}>
        <p className="text-justify text-sm p-2 h-[30%] bg-white">{
          movie.description.length > DESCRIPTIONMAX ? movie.description.slice(0, DESCRIPTIONMAX) + "..." : movie.description}
        </p>
      </Link>
    </div>
  );
}

export default MovieCard;
