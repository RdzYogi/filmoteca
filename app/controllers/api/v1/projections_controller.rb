class Api::V1::ProjectionsController < ApplicationController
  def index
    projections = Projection.includes(:movie, :session).references(:movie, :session)
    render json: projections, include: %i[movie session]
  end

  def show
    projection = Projection.find(params[:id])
    if projection
      session = projection.session
      movie = projection.movie
      hall = session.hall
      seats = hall.seats
      result = { session:, movie:, hall:, seats:}
      render json: { projection: result}
    else
      render json: { error: 'projection not found' }, status: :not_found
    end
  end
end
