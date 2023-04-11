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
    subscriptions = current_user.subscriptions
    subscription = subscriptions.find{ |sub| sub.remaining_uses != 0 || Date.today < sub.end_date }
    index_of_sub = subscriptions.index(subscription)

    puts 'answer should be here'
    result = []

    seats.each do |seat|
      reservation = Reservation.new(seat_id: seat["id"], session_id: session.id, user_id: current_user.id, subscription_id: subscriptions[index_of_sub].id)
      if reservation.save
        result << reservation
        subscription.tipo == 'abono10' && subscription.remaining_uses -= 1
      else
        render json: reservation.errors, status: :unprocessable_entity
      end
    end
    render json: result
    puts result
    puts subscription.remaining_uses
  end

  # def update
  #   # a = abono.find(), a.uses = new_number, a.update
  #   reservation = Reservation.find(params[:id])
  #   subscription = Subscription.find(reservation.subscription_id)
  #   if subscription
  #     render json: { message: "Subscription updated successfully" }, status: :ok
  #   else
  #     render json: { error: "Unable to update subscription" }, status: :unprocessable_entity
  #   end
  # end

  private

  def reservation_params
    params.require(:reservationinfo).permit(:projection_id, seats: [[:id, :row, :column, :hall_id,:created_at, :updated_at, :available]])
  end

end
