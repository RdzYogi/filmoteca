class Subscription < ApplicationRecord
  belongs_to :user
  has_many :reservations
  has_many :reservations
end
