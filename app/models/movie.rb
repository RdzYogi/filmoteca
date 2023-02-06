class Movie < ApplicationRecord
  belongs_to :session
  belongs_to :cycle
end
