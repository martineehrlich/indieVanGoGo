class Categorizing < ActiveRecord::Base
  validates :category_id, :categorizable_id, :categorizable_type, presence: true
  belongs_to :categorizable, polymorphic: true
  belongs_to :category
end
