class CreateSubscriptions < ActiveRecord::Migration[7.0]
  def change
    create_table :subscriptions do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.integer :remaining_uses
      t.string :type
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
