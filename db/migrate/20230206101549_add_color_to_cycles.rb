class AddColorToCycles < ActiveRecord::Migration[7.0]
  def change
    add_column :cycles, :color, :string
  end
end
