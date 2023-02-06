class CreateSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :sessions do |t|
      t.string :name
      t.text :description
      t.text :quote
      t.datetime :play_time
      t.references :cycle, null: false, foreign_key: true
      t.references :hall, null: false, foreign_key: true

      t.timestamps
    end
  end
end
