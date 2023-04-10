class Reservation < ApplicationRecord
  belongs_to :session
  belongs_to :seat
  belongs_to :user
  belongs_to :subscription, optional: true
end
