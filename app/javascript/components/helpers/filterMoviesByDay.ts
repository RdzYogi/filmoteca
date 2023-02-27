import React from 'react'
import getDateObject from './getDateObject'

type Input = {
  movies: JSX.Element[]
  day: string
}

function filterMoviesByDay(input: Input) {
  const result= [] as JSX.Element[]
  input.movies.forEach((movie) => {
    movie.props.movie.include.projections.forEach((projection) => {
      if (getDateObject(projection.include.session.play_time).day === input.day) {
        result.push(movie)
      }
    })
  })
  return result
}

export default filterMoviesByDay
