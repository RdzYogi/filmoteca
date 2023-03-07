class Api::V1::ReservationsController < ApplicationController
  before_action :authenticate_user!

  # props dont need index nor show
  def index
    reservations = Reservation.includes(:session, :user, :subscription, :seat, :ticket)
    # belong to current session
    result = reservations.map do |reservation|
      session = reservation.session_id
      user = reservation.user_id
      subscription = reservation.subscription_id
      seat = reservation.seat_id
      { reservation:, include: { session:, user:, subscription:, seat:, ticket: } }
    end
    render json: result
  end

  def show
    reservation = Reservation.find(params[:id])
    if reservation
      render json: reservation
    else
      render json: {error: "Reservation not found"}, status: :not_found
    end
  end

  def create
    reservation = Reservation.create(reservation_params)
    render json: reservation
  end

  private

  def reservation_params
    params.require(:reservation).permit(:id, :session_id, :seat_id, :user_id, :subscription_id, :ticket)
  end
end
