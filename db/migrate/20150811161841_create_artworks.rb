class CreateArtworks < ActiveRecord::Migration
  def change
    create_table :arts do |t|
      t.integer :artist_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.string :image_file_name, null: false
      t.timestamps null: false
    end
    add_index :arts, :artist_id
  end
end
