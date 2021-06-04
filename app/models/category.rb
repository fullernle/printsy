class Category < ApplicationRecord
  validates: :name, presence: true, uniqueness: true 

  belongs_to :product 
end
