class Session < ApplicationRecord
  belongs_to :hall
  has_many :projections
  has_many :reservations
end
