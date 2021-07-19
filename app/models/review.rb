# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  rating      :integer          not null
#  body        :text             not null
#  product_id  :integer          not null
#  reviewer_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
  validates :rating, :body, presence: true

  belongs_to :reviewer, foreign_key: :reviewer_id, class_name: :User

  belongs_to :product
end
