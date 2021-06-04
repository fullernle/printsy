class Product < ApplicationRecord
  validates: :name, :description, :price, :category_id, :seller_id, presence: true 

  has_many :categories

  belongs_to :seller, 
    foreign_key: :seller_id,
    class_name: :User

  has_many :cart_items
  
end
