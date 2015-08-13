class CreateCategorizings < ActiveRecord::Migration
  def change
    create_table :categorizings do |t|
      t.integer :category_id, null: false
      t.references :categorizable, polymorphic: true, index: true
      t.timestamps null: false
    end
  end
end
