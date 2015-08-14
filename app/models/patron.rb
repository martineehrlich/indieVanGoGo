class Patron < ActiveRecord::Base
  validates :artist_id, :amount, :name, presence: true
  belongs_to :artist,
    class_name: :User,
    foreign_key: :artist_id
end
