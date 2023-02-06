class AddSlugToCycles < ActiveRecord::Migration[7.0]
  def change
    add_column :cycles, :slug, :string
  end
end
