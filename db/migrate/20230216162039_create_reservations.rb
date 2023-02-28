class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.boolean :ticket
      t.references :session, null: false, foreign_key: true
      t.references :seat, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.references :subscription, null: false, foreign_key: true

      t.timestamps
    end
  end
end
