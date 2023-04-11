class AddAbonoTicketCountToReservations < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :abono_ticket_count, :integer
  end
end
