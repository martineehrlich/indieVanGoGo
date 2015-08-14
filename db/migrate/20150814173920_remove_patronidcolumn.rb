class RemovePatronidcolumn < ActiveRecord::Migration
  def change
    remove_column :patrons, :patron_id, :integer
  end
end
