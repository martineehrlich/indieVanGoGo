class Addindexforartist < ActiveRecord::Migration
  def change
    add_index :patrons, :artist_id
  end
end
