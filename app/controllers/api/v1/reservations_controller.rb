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
    subscription = subscriptions.find{ |sub| sub.remaining_uses.positive? || Date.today < sub.end_date }
    index_of_sub = subscriptions.index(subscription)
    abono_ticket_count = reservation_params[:abono_ticket_count].to_i
    puts abono_ticket_count
    puts 'answer should be here'
    result = []

    saved = false
    abono_buys = 0
    seats.each do |seat|
      if subscription.remaining_uses > 0 && abono_buys < subscription.remaining_uses
        reservation = Reservation.new(seat_id: seat["id"], session_id: session.id, user_id: current_user.id, subscription_id: subscriptions[index_of_sub].id)
        if reservation.save
          result << reservation
          saved = true
          abono_buys += 1
        else
          render json: reservation.errors, status: :unprocessable_entity
        end
      else
        alert('not enough')
      end
    end

    if saved && subscription.tipo == 'abono10' && abono_ticket_count.positive?
      subscription.remaining_uses -= abono_ticket_count
      subscription.save
    end

    render json: result
  end

  private

  def reservation_params
    params.require(:reservationinfo).permit(:projection_id, :abono_ticket_count, seats: [[:id, :row, :column, :hall_id,:created_at, :updated_at, :available]])
  end

end
