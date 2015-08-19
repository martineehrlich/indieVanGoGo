class Art < ActiveRecord::Base
  validates :artist, :title, :image_file_name, presence: true
  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: :User
  has_many :categories, through: :categorizings, source: :category
  has_many :categorizings, as: :categorizable

  def self.arts_in_category(category_id)
    self.joins(:categorizings).where(categorizings: {category_id: category_id.to_i})
  end

  def self.arts_in_search(search_string)
    search_string = "%#{search_string}%"
    self.where("arts.title ilike ? or arts.description ilike ?", search_string, search_string)
  end


  def full_image
    full_image = image_file_name.gsub(
      'image/upload',
      'image/upload/c_fill,h_400,w_600'
    )

    "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + full_image
  end

  def thumbnail_image
    thumbnail_image = image_file_name.gsub(
      'image/upload',
      'image/upload/c_fill,h_180,w_220'
    )

    "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + thumbnail_image
  end

  def search_image
    search_image = image_file_name.gsub(
      'image/upload',
      'image/upload/c_fill,h_30,w_30'
    )
    "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + search_image
  end

end
