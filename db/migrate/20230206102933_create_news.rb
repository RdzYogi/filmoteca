class CreateNews < ActiveRecord::Migration[7.0]
  def change
    create_table :news do |t|
      t.string :title
      t.text :description
      t.string :link
      t.string :img_url

      t.timestamps
    end
  end
end
