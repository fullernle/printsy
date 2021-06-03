class Product < ApplicationRecord
  validates: :name, :description, :price, :category_id, :seller_id, presence: true 

  
end
