class Patron < ActiveRecord::Base
  validates :artist_id, :amount, :anonymous, presence: true
  belongs_to :artist,
    class_name: :User,
    foreign_key: :artist_id
end
