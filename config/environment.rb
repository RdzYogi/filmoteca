# Load the Rails application.
require_relative "application"

Filmoteca::Application.configure do
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.smtp_settings = {
    :user_name => 'f452382cd3323f',
    :password => 'f75eaa6018d180',
    :address => 'sandbox.smtp.mailtrap.io',
    :domain => 'sandbox.smtp.mailtrap.io',
    :port => '2525',
    :authentication => :cram_md5
  }
  # config.action_mailer.delivery_method = :mailtrap
  # config.action_mailer.mailtrap_settings = {
  #   api_key: ENV.fetch(MAILTRAP_API_KEY)
  # }
end

# Initialize the Rails application.
Rails.application.initialize!
