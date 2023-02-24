class Api::V1::UserDetailsController < ApplicationController
  before_action :authenticate_user!
  protect_from_forgery with: :null_session
  respond_to :json

  def index
    # fetch user details from devise rails api
    # user_details = current_user.as_json(only: [:id, :email, :name, :created_at, :updated_at])
    subscriptions = current_user.subscriptions
    reservartions = current_user.reservations
    render json: { subscriptions:, reservartions: }, status: :ok
  end
end
