class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :runtime
      t.string :director
      t.text :description
      t.text :quote
      t.string :img_url
      t.string :year
      t.references :session, null: false, foreign_key: true
      t.references :cycle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
