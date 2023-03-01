import React, { useEffect, useState } from 'react'
import getDateObject from '../helpers/getDateObject'

function CalendarCards({movie,projection}) {
  const [movieCard, setMovieCard] = useState([])
  useEffect(() => {
    console.log(movie)
    const playTime = projection.include.session.play_time
    const playTimeString = getDateObject(playTime).hour + ":" + getDateObject(playTime).minutes + "H" + " - " + projection.include.hall.name
    setMovieCard(movieCards => [...movieCards,
      <div key={movie.movie.slug+projection.projection.id} className="text-center min-h-46 w-36">
        <p className={'font-bold bg-' + movie.include.cycle.color}>{movie.include.cycle.name}</p>
        <div className=''>
          <p className='font-bold'>{movie.movie.title}</p>
          <p>{movie.movie.director + ", " + movie.movie.year}</p>
          <p className='font-bold'>{playTimeString}</p>
        </div>
      </div>
    ])
  }, [])
  return (
    <>
      {movieCard}
    </>

  )
}

export default CalendarCards
