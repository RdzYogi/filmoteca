class Api::V1::MoviesController < ApplicationController
  def index
    movies = Movie.includes(:cycle, :projections, projections: [:session, session: :hall]).references(:cycles, :projections, :sessions, :halls)
    result = movies.map do |movie|
      cycle = movie.cycle
      projections = movie.projections.map do |projection|
        session = projection.session
        hall = session.hall
        { projection:, include: { session:, hall: } }
      end
      { movie:, include: { cycle:, projections: } }
    end
    render json: result
  end

  def show
    movie = Movie.includes(:cycle, :projections, projections: [:session, session: :hall]).references(:cycles, :projections, :sessions, :halls).find_by(slug: params[:slug])
    if movie
      cycle = movie.cycle
      projections = movie.projections.map do |projection|
        session = projection.session
        hall = session.hall
        { projection:, include: { session:, hall: } }
      end
      result = { movie:, include: { cycle:, projections: } }
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
