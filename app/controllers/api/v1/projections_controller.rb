class Api::V1::ProjectionsController < ApplicationController

  def index
    projections = Projection.includes(:movie, :session, session: [:reservations, :hall, hall: :seats]).references(:movie, :session, :hall, :seats)
    # add reservations
    render json: projections, include: %i[movie session]
  end

  def show
    projection = Projection.find(params[:id])
    if projection
      session = projection.session
      movie = projection.movie
      hall = session.hall
      seats = hall.seats
      reservations = session.reservations
      result = { projection:, include: { movie:, session:, include: { reservations:, hall:, include: { seats: } } } }
      render json: result
    else
      render json: { error: 'projection not found' }, status: :not_found
    end
  end
end
