class RemoveTicketFromReservations < ActiveRecord::Migration[7.0]
  def change
    remove_column :reservations, :ticket, :boolean
  end
end
