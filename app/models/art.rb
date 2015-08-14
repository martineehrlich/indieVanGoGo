class Art < ActiveRecord::Base
  validates :artist, :title, :image_file_name, presence: true
  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: :User
  has_many :categories, through: :categorizings, source: :category
  has_many :categorizings, as: :categorizable

  def self.arts_in_category(category_id)
    # scope :artists, ->{ self.joins(:arts).group('users.id').having("COUNT('arts') > 0") }

    self.select { |art| art.category_ids.include?(category_id.to_i) }
    # self.joins(:categorizings).group('arts.id').having(category_id = category_id.to_i)
  end
end
