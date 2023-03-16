class Api::V1::UserDetailsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery with: :null_session
  respond_to :json

  def index
    # fetch user details from devise rails api
    # user_details = current_user.as_json(only: [:id, :email, :name, :created_at, :updated_at])
    subscriptions = current_user.subscriptions
    reservations = current_user.reservations
    render json: { subscriptions:, reservations: }, status: :ok
  end

  def create
    # create user details
    p = user_details_params
    res = {}
    res[:type] = "algo"
    res[:type] = p[:type]
    render json: { res:, current_user: }, status: :ok
  end

  private

  def user_details_params
    params.require(:abono_details).permit(:type)
  end

end
