# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  price       :integer          not null
#  category_id :integer          not null
#  seller_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
  validates :name, :description, :price, :category_id, :seller_id, presence: true 

  has_many :categories

  belongs_to :seller, 
    foreign_key: :seller_id,
    class_name: :User

  has_many :cart_items
  
  has_one_attached :photo 
end
