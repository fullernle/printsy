# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  quantity   :integer          not null
#  cart_id    :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
  belongs_to :cart, foreign_key: :cart_id, class_name: :Cart

  belongs_to :product, foreign_key: :product_id, class_name: :Product
end
