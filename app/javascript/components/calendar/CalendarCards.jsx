import React, { useEffect, useState } from 'react'
import getDateObject from '../helpers/getDateObject'

function CalendarCards({movie,projection}) {
  const [movieCard, setMovieCard] = useState([])
  useEffect(() => {
    // console.log(movie)
    const playTime = projection.include.session.play_time
    const playTimeString = getDateObject(playTime).hour + ":" + getDateObject(playTime).minutes + "H" + " - " + projection.include.hall.name
    setMovieCard(movieCards => [...movieCards,
      <div key={movie.movie.slug+projection.projection.id} className={"text-center text-sm border mb-1 border-black h-46 w-36 bg-" + movie.include.cycle.color}>
        {/* <p className={'font-bold h-4 bg-' + movie.include.cycle.color}></p> */}
        {/* {movie.include.cycle.name} */}
        <div className=''>
          <p className='font-bold'>{playTimeString}</p>
          <p className='font-bold text-xs'>{movie.movie.title}</p>
          {/* <p>{movie.movie.director + ", " + movie.movie.year}</p> */}
          {/* <button className='text-white bg-black mb-1 px-2'>Comprar</button> */}
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
