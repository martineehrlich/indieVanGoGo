class Art < ActiveRecord::Base
  validates :artist, :title, :image_file_name, presence: true
  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: :User
  has_many :categories, through: :categorizings, source: :category
  has_many :categorizings, as: :categorizable


  def self.arts_in_category(category_id)
    if category_id == "1"
      return self.all
    else
      self.joins(:categorizings).where(categorizings: {category_id: category_id.to_i})
    end
  end

  def self.arts_in_search(search_string)
    search_string = "%#{search_string}%"
    self.where("arts.title ilike ?", search_string)
  end

  def full_image
    image_file_name.gsub(
      'image/upload',
      'image/upload/c_scale,w_500'
    )
  end

  def thumbnail_image
    image_file_name.gsub(
      'image/upload',
      'image/upload/c_fill,h_180,w_220'
    )

  end

  def search_image
    image_file_name.gsub(
      'image/upload',
      'image/upload/c_fill,h_30,w_30'
    )

  end

  def cropped_title
    if self.title
      if self.title.length <= 20
        self.title
      else
        self.title[0..19] + "..."
      end
    end
  end


  def cropped_description
    if self.description
      if self.description.length < 150
        self.description
      else
        self.description[0..150] + "..."
      end
    end
  end

  def search_header
    if self.title.length < 17
      self.title
    else
      self.title[0..16] + "..."
    end
  end
end
