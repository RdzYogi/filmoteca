import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getDateObject from '../helpers/getDateObject'

function CalendarCards({movie,projection}) {
  const [movieCard, setMovieCard] = useState([])
  useEffect(() => {
    // console.log(movie)
    const playTime = projection.include.session.play_time
    const playTimeString = getDateObject(playTime).hour + ":" + getDateObject(playTime).minutes + "H" + " - " + projection.include.hall.name
    setMovieCard(movieCards => [...movieCards,
      <Link to={"/movies/"+ movie.movie.slug} key={movie.movie.slug+projection.projection.id} className={"text-center text-sm border mb-1 transition duration-300 hover:opacity-75 border-black h-46 w-36 bg-" + movie.include.cycle.color}>
        <div className=''>
          <p className='font-bold'>{playTimeString}</p>
          <p className='font-bold text-xs'>{movie.movie.title}</p>
        </div>
      </Link>
    ])
  }, [])
  return (
    <>
      {movieCard}
    </>

  )
}

export default CalendarCards
