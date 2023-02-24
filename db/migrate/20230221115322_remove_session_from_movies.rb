class RemoveSessionFromMovies < ActiveRecord::Migration[7.0]
  def change
    remove_reference :movies, :session, null: false, foreign_key: true
  end
end
