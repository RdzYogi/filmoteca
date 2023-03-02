class Cycle < ApplicationRecord
  has_many :movies

  before_create do |cycle|
    cycle.slug = cycle.name.to_slug
  end

  before_update do |cycle|
    cycle.slug = cycle.name.to_slug
  end
end
