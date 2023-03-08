class CreateContactMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :contact_messages do |t|
      t.string :name
      t.string :email
      t.string :email_confirmation
      t.string :asunto
      t.text :message

      t.timestamps
    end
  end
end
