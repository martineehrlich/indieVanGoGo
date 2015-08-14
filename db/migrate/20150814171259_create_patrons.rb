class CreatePatrons < ActiveRecord::Migration
  def change
    create_table :patrons do |t|
      t.integer :artist_id, null: false
      t.integer :patron_id, null: false
      t.integer :amount, null: false
      t.timestamps null: false
    end
  end
end
