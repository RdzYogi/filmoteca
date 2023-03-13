class Reservation < ApplicationRecord
  belongs_to :session
  belongs_to :seat
  belongs_to :user
end
