class Session < ApplicationRecord
  belongs_to :cycle
  belongs_to :hall
end
