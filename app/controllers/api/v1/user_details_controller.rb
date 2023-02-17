class Api::V1::UserDetailsController < ApplicationController
  before_action :authenticate_user!

  def index
    user_details = current_user.user_details
    render json: user_details
  end

  # def create
  #   user_detail = current_user.user_details.new(user_detail_params)
  #   if user_detail.save
  #     render json: user_detail
  #   else
  #     render json: { errors: user_detail.errors.full_messages }, status: 422
  #   end
  # end

  # def update
  #   user_detail = current_user.user_details.find(params[:id])
  #   if user_detail.update(user_detail_params)
  #     render json: user_detail
  #   else
  #     render json: { errors: user_detail.errors.full_messages }, status: 422
  #   end
  # end

  # def destroy
  #   user_detail = current_user.user_details.find(params[:id])
  #   user_detail.destroy
  #   render json: user_detail
  # end

  # private

  # def user_detail_params
  #   params.require(:user_detail).permit(:name, :email, :phone, :address)
  # end
end
