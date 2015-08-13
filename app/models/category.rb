class Category < ActiveRecord::Base
  validates :name, :image_url, presence: true
end
