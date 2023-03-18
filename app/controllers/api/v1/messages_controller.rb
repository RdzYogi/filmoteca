class Api::V1::MessagesController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    @messages = Message.order(read: :asc,created_at: :desc).where(deleted: false)
    render json: @messages
  end

  def create
    m = Message.new(message_params)
    if m.save
      render json: { message: 'Message sent successfully' }, status: :created
    else
      render json: { message: 'Message not sent' }, status: 200
    end
  end

  def destroy
    m = Message.find(params[:id])
    m.deleted = true
    if m.save
      render json: { message: 'Message deleted successfully' }, status: 200
    else
      render json: { message: 'Message not deleted' }, status: 200
    end
  end

  def update
    m = Message.find(params[:id])
    m.read = true
    if m.save
      render json: { message: 'Message updated successfully' }, status: 200
    else
      render json: { message: 'Message not updated' }, status: 200
    end
  end


  private

  def message_params
    params.require(:message).permit(:name, :email, :subject, :message)
  end
end
