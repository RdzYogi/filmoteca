class Api::V1::ReservationsController < ApplicationController
  before_action :authenticate_user!, only: [:create]
  protect_from_forgery with: :null_session

  # props dont need index nor show
  def index
    reservations = Reservation.includes(:session, :user, :subscription, :seat)
    # belong to current session
    render json: reservations
  end

  # def show
  #   reservation = Reservation.find(params[:id])
  #   if reservation
  #     render json: reservation
  #   else
  #     render json: {error: "Reservation not found"}, status: :not_found
  #   end
  # end

  def create
    projection = Projection.find(reservation_params[:projection_id].to_i)
    session = projection.session
    seats = reservation_params[:seats]
    puts seats
    puts 'answer should be here'
    result = []
    seats.each do |seat|
      reservation = Reservation.new(seat_id: seat["id"], session_id: session.id, user_id: current_user.id)
      if reservation.save
        result << reservation
      end
    end
    render json: result
  end

  private

  def reservation_params
    params.require(:reservationinfo).permit(:projection_id, seats: [[:id, :row, :column, :hall_id,:created_at, :updated_at, :available]])
  end
end
