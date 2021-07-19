# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  price       :integer          not null
#  seller_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
  validates :name, :description, :price, :seller_id, presence: true 

  has_many :product_category, 
    foreign_key: :product_id, 
    class_name: :ProductCategory

  has_many :categories, 
    through: :product_category,
    source: :category
    
  belongs_to :seller, 
    foreign_key: :seller_id,
    class_name: :User

  has_many :cart_items,
    foreign_key: :product_id, 
    class_name: :CartItem
  
  has_one_attached :photo 

	has_many :reviews
end
