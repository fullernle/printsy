# == Schema Information
#
# Table name: categories
#
#  id                  :bigint           not null, primary key
#  name                :string           not null
#  product_category_id :integer          not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class Category < ApplicationRecord
  validates :name, presence: true, uniqueness: true 

  belongs_to :product_category, 
    foreign_key: :product_category_id,
    class_name: :ProductCategory 
    
end
