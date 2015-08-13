class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  has_many :categories, through: :categorizings, source: :category
  has_many :categorizings, as: :categorizable
  has_many :arts,
  class_name: :Art,
  foreign_key: :artist_id
  attr_reader :password

  #where # arts >= 1
  # select * from users join arts group by users.id having count(arts.id > 0)
  # warning this is an N + 1 query need to improve later
  scope :artists, ->{ select { |user| user.arts.length > 0 } }

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    user
  end

  def self.artists_in_category(category_id)
    artists.select { |artist| artist.category_ids.include?(category_id.to_i) }
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
