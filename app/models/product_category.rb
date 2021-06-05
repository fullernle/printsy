# == Schema Information
#
# Table name: product_categories
#
#  id         :bigint           not null, primary key
#  product_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ProductCategory < ApplicationRecord
  belongs_to :product, 
    foreign_key: :product_id, 
    class_name: :Product

  has_many :categories, 
    foriegn_key: :product_category_id,
    class_name: :ProductCategory

end
