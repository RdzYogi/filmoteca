class CreateCycles < ActiveRecord::Migration[7.0]
  def change
    create_table :cycles do |t|
      t.string :name
      t.text :description
      t.text :quote
      t.string :img_url
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end
