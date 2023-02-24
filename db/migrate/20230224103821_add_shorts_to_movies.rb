class AddShortsToMovies < ActiveRecord::Migration[7.0]
  def change
    add_column :movies, :shorts, :text, default: ''
  end
end
