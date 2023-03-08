class AddVistoToContactMessage < ActiveRecord::Migration[7.0]
  def change
    add_column :contact_messages, :visto, :boolean, default: false
  end
end
