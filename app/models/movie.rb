class Movie < ApplicationRecord
  belongs_to :cycle
  has_many :projections

  before_create do |movie|
    movie.slug = movie.title.to_slug
  end

  before_update do |movie|
    movie.slug = movie.title.to_slug
  end
end
