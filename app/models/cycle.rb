class Cycle < ApplicationRecord
  has_many :sessions
  has_many :movies

  before_create do |cycle|
    cycle.slug = cycle.name.to_slug
  end
end
