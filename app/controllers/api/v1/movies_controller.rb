class Api::V1::MoviesController < ApplicationController
  def index
    movies = Movie.includes(:cycle, :session).references(:cycles, :sessions)
    p movies
    render json: movies, include: %i[cycle session]
  end

  def show
    movie = Movie.find_by(slug: params[:slug])
    if movie
      render json: movie, include: %i[cycle session]
    else
      render json: { error: 'Movie not found' }, status: :not_found
    end
  end
end
