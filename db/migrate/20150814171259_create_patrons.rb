class CreatePatrons < ActiveRecord::Migration
  def change
    create_table :patrons do |t|

      t.timestamps null: false
    end
  end
end
