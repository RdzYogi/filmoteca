class CreateProjections < ActiveRecord::Migration[7.0]
  def change
    create_table :projections do |t|
      t.references :movie, null: false, foreign_key: true
      t.references :session, null: false, foreign_key: true

      t.timestamps
    end
  end
end
