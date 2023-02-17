class CreatePrices < ActiveRecord::Migration[7.0]
  def change
    create_table :prices do |t|
      t.integer :ticket_price_normal
      t.integer :ticket_price_discount
      t.integer :abono_price_normal
      t.integer :abono10_price_normal
      t.integer :abono_price_discount
      t.integer :abono10_price_discount

      t.timestamps
    end
  end
end
