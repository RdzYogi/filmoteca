class Projection < ApplicationRecord
  belongs_to :movie
  belongs_to :session
  has_many :reservations, through: :sessions
end
