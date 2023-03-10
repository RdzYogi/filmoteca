class AddDefaultValueToAvailable < ActiveRecord::Migration[7.0]
  def change
    change_column :seats, :available, :boolean, default: true
  end
end
