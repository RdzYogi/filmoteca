class Movie < ApplicationRecord
  belongs_to :session
  belongs_to :cycle

  before_create do |movie|
    movie.slug = movie.title.to_slug
  end
end
