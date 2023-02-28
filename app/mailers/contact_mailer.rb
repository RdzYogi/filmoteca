class ContactMailer < ApplicationMailer
  def send_mail(nombre, correo, asunto, mensaje)
    mail(to: 'fcrespo8@hotmail.com', subject: asunto, from: nombre, body: mensaje, reply_to: correo)
  end
end
