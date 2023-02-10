class Api::V1::MoviesController < ApplicationController
  def index
    movies = Movie.includes(:cycle, :session).references(:cycles, :sessions)

    result = movies.map do |movie|
      cycle = Cycle.find(movie.cycle_id)
      session = Session.find(movie.session_id)
      hall = Hall.find(session.hall_id)
      { movie:, include: { cycle:, session:, hall: } }
    end

    render json: result
  end

  def show
    movie = Movie.find_by(slug: params[:slug])
    if movie
      cycle = Cycle.find(movie.cycle_id)
      session = Session.find(movie.session_id)
      hall = Hall.find(session.hall_id)
      result = { movie:, include: { cycle:, session:, hall: } }

      render json: result
    else
      render json: { error: 'Movie not found' }, status: :not_found
    end
  end
end
