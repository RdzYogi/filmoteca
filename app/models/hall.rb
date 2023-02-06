class Hall < ApplicationRecord
  has_many :sessions
  has_many :seats
end
