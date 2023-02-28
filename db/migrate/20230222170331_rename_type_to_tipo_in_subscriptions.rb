class RenameTypeToTipoInSubscriptions < ActiveRecord::Migration[7.0]
  def up
    rename_column :subscriptions, :type, :tipo
  end

  def down
    rename_column :subscriptions, :tipo, :type
  end
end
