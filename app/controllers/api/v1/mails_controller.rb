class Api::V1::MailsController < ApplicationController
  def mail
    ContactMailer.send_mail(params[:nombre], params[:correo], params[:asunto], params[:mensaje]).deliver_later
    render json: { status: 'SUCCESS', message: 'Mail sent', data: params }, status: :ok
  end
end
