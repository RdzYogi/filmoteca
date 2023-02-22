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

  # create, destory, update
  # need to add that only admin can do these three
  def create
    movie = Movie.create(movie_params)
    render json: movie
  end

  def destroy
    Movie.find_by(slug: params[:slug]).destroy
  end

  def update
    movie = Movie.includes(:cycle, :session).find_by(slug: params[:slug])
    movie.update(movie_params)
    render json: movie
  end

  private

  def movie_params
    params.require(:movie).permit(:id, :title, :runtime, :director, :description, :quote, :img_url, :year, :slug, :cycle_id, :session_id)
  end
end
