class Category < ActiveRecord::Base
  validates :name, :image_url, presence: true
  has_many :categorizings, as: :categorizable
end
