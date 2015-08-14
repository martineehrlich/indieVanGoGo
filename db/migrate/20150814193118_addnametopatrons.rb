class Addnametopatrons < ActiveRecord::Migration
  def change
    add_column :patrons, :name, :string, null: false
  end
end
