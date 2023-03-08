class Api::V1::ReservationsController < ApplicationController
  # before_action :authenticate_user!, only: [:create]

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
    # user = current_user
    # subscription = user.subscription
    # projection = Projection.find(params[id])
    # session = projection.session
    # reservation = Reservation.create(user_id: user, subscription_id: subscription, session_id: session, seat_id: reservation_params)
    reservation = Reservation.create(reservation_params)
    render json: reservation
  end

  private

  def reservation_params
    params.require(:reservation).permit(:id, :session_id, :seat_id, :user_id, :subscription_id)
  end
end
