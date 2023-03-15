class Api::V1::MessagesController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    @messages = Message.order(created_at: :desc).where(deleted: false)
    render json: @messages
  end

  def create
    m = Message.new(message_params)
    if m.save
      render json: { message: 'Message sent successfully' }, status: 200
    else
      render json: { message: 'Message not sent' }, status: 200
    end
  end


  private

  def message_params
    params.require(:message).permit(:name, :email, :subject, :message)
  end
end
