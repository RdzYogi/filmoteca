class Seat < ApplicationRecord
  belongs_to :hall
  has_many :reservations
end
