class Api::V1::HallsController < ApplicationController
  def index
    halls = Hall.includes(:seats, :sessions).references(:seats, :sessions)
    render json: halls, include: %i[seats sessions]
  end

  def show
    hall = Hall.find(params[:id])
    if hall
      seats = Seat.where(hall_id: hall.id)
      sessions = Session.where(hall_id: hall.id)
      result = {hall:, seats:, sessions:}
      render json: result
    else
      render json: { error: 'Hall not found' }, status: :not_found
    end
  end

  # private

  # def hall_params
  #   params.require(:hall).permit(:id, :name, :seats, :sessions)
  # end
end
