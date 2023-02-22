class Api::V1::MoviesController < ApplicationController
  def index
    projections = Projection.includes(:movie, :session, :session => :hall, :movie => :cycle).references(:movies, :sessions, :sessions => :halls, :movies => :cycles)
    result = projections.map do |projection|
      cycle = Cycle.find(projection.movie.cycle_id)
      session = Session.find(projection.session_id)
      movie = Movie.find(projection.movie_id)
      hall = Hall.find(projection.session.hall_id)
      { projection:, include: { cycle:, session:, movie:, hall: } }
    end

    render json: result
  end

  # index is ok, have to update show with new seeds data
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
    Movie.destroy(params[:id])
  end

  def update
    movie = Movie.find_by(slug: params[:slug])
    movie.update(movie_params)
    puts movie.title
    puts movie_params
    render json: movie
  end

  private

  def movie_params
    params.require(:movie).permit(:id, :title, :runtime, :director, :description, :quote, :img_url, :year, :slug)
  end
end
