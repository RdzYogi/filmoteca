class Cycle < ApplicationRecord
  has_many :sessions
  has_many :movies
end
