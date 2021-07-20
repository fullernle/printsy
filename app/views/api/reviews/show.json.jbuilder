 json.extract! @review, :id, :rating, :body, :product_id, :reviewer_id, :created_at
json.reviewer @review.reviewer.username