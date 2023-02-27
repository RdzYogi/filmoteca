import React from 'react'
import getDateObject from './getDateObject'

type Input = {
  movies: JSX.Element[]
  day: string
}
// This will only return movies for current month
function filterMoviesByDay(input: Input) {
  const dateToday = new Date()
  const currentMonth = getDateObject(dateToday.toString()).month
  const result= [] as JSX.Element[]
  input.movies.forEach((movie) => {
    movie.props.movie.include.projections.forEach((projection) => {
      const day = getDateObject(projection.include.session.play_time).day
      const month = getDateObject(projection.include.session.play_time).month
      if (day === input.day && month === currentMonth) {
        result.push(movie)
      }
    })
  })
  return result
}

export default filterMoviesByDay
