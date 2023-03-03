class RemoveSeveralColumnsFromSessions < ActiveRecord::Migration[7.0]
  def change
    remove_column :sessions, :name, :string
    remove_column :sessions, :description, :text
    remove_column :sessions, :quote, :text
    remove_column :sessions, :cycle_id, :bigint
  end
end
