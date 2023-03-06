import React from 'react'
import getDateObject from './getDateObject'

type Input = {
  movies: JSX.Element[]
  day: number
}
// This will only return movies for current month
function filterMoviesByDay(input: Input) {
  // console.log(input)
  const dateToday = new Date()
  const currentMonth = getDateObject(dateToday.toString()).month
  const result= [] as JSX.Element[]
  input.movies.forEach((movie) => {
    movie.props.movie.include.projections.forEach((projection) => {
      // console.log(Number(projection.include.session.play_time.split('T')[0].split('-')[2]), input.day)
      const day = Number(projection.include.session.play_time.split('T')[0].split('-')[2])
      const month = getDateObject(projection.include.session.play_time).month
      if (day === Number(input.day) && month === currentMonth) {
        result.push(movie)
      }
    })
  })
  return result
}

export default filterMoviesByDay
