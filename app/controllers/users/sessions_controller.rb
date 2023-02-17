# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  protect_from_forgery with: :null_session
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    puts 'respond_with'
    render json: {
      message: 'Signed in successfully',
      user: current_user,
    }, status: :ok
  end

  def respond_to_on_destroy
    log_out_success && return if current_user

    log_out_failed
  end

  def log_out_success
    render json: {
      message: 'Signed out successfully',
      user: current_user
    }, status: :ok
  end

  def log_out_failed
    render json: {
      message: 'Something went wrong',
    }, status: :unauthorized
  end

  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
