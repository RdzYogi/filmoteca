class Api::V1::UserDetailsController < ApplicationController
  protect_from_forgery with: :null_session
  respond_to :json

  def index
    # fetch user details from devise rails api
    user_details = current_user.as_json(only: [:id, :email, :name, :created_at, :updated_at])
    render json: {user: user_details} , status: :ok
  end
end
