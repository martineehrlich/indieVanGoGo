class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  has_many :categories, through: :categorizings, source: :category
  has_many :categorizings, as: :categorizable
  has_many :arts,
    class_name: :Art,
    foreign_key: :artist_id
  has_many :patrons,
    class_name: :Patron,
    foreign_key: :artist_id
  attr_reader :password
  after_initialize :image_url_set


  scope :artists, ->{ User.joins(:arts).group('users.id').having("COUNT('arts') > 0") }

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    user
  end

  def self.artists_in_category(category_id)
    if category_id == "1"
      return artists
    else
      artists.joins(:categorizings).where(categorizings: {category_id: category_id.to_i})
    end
  end

  def self.artists_in_search(search_string)
    search_string = "%#{search_string}%"
    artists.where("users.name ilike ?", search_string)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def amount_funded
    amount = 0
    patrons.each do |patron|
      amount += patron.amount
    end
    return amount
  end

  def percent_funded
    self.goal ||= 1
    self.amount_funded * 100 / self.goal
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def image_url_set
    self.image_url ||= "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1439329855/StarryNight2436_yimked.jpg"
  end

  def profile_picture
    profile_picture = image_url.gsub(
      'image/upload',
      'image/upload/c_fill,h_180,w_150'
    )

     profile_picture
  end

  def thumbnail_image
    thumbnail_image = image_url.gsub(
      'image/upload',
      'image/upload/c_fill,h_180,w_220'
    )

    thumbnail_image
  end

  def search_image
    search_image = image_url.gsub(
      'image/upload',
      'image/upload/c_fill,h_30,w_30'
    )
    search_image
  end

  def cropped_description
    if self.description
      self.description[0..110] + "..."
    end
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
