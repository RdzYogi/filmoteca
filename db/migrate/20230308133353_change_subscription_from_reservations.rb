class ChangeSubscriptionFromReservations < ActiveRecord::Migration[7.0]
  def change
    change_column_null :reservations, :subscription_id, true
  end
end
