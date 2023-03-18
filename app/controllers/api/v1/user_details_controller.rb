class Api::V1::UserDetailsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery with: :null_session
  respond_to :json

  def index
    # fetch user details from devise rails api
    # user_details = current_user.as_json(only: [:id, :email, :name, :created_at, :updated_at])
    all_subscriptions = current_user.subscriptions
    subscriptions = all_subscriptions.map do |s|
      if s.tipo == 'abono'
        if s.end_date > Date.today
          s
        end
      elsif s.tipo == 'abono10'
        if s.remaining_uses > 0
          s
        end
      end
    end
    reservations = current_user.reservations
    render json: { subscriptions:, reservations: }, status: :ok
  end

  def create
    # create user details
    p = user_details_params["type"]
    puts "aqui "
    puts user_details_params["type"]
    puts p
    case p
    when 'abono10N'
      a = Subscription.create(user_id: current_user.id, tipo: 'abono10', remaining_uses: 10)
    when 'abono10D'
      a = Subscription.create(user_id: current_user.id, tipo: 'abono10', remaining_uses: 10)
    when 'abonoAN'
      a = Subscription.create(user_id: current_user.id, tipo: 'abono',start_date: Date.today, end_date: Date.today + 1.year)
    when 'abonoAD'
      a = Subscription.create(user_id: current_user.id, tipo: 'abono',start_date: Date.today, end_date: Date.today + 1.year)
    end

    if a.save
      render json: a, status: :created
    else
      render json: { errors: a.errors }, status: :unprocessable_entity
    end

  end

  private

  def user_details_params
    params.require(:abono_details).permit(:type)
  end

end
