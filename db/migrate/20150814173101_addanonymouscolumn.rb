class Addanonymouscolumn < ActiveRecord::Migration
  def change
    add_column :patrons, :anonymous, :boolean, default: false
  end
end
