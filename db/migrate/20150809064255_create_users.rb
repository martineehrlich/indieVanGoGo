class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :name, null: false
      t.text :description
      t.string :image_url
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps null: false
    end
  end
end
