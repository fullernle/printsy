 json.extract! @review, :id, :rating, :body, :product_id, :reviewer_id
json.reviewer @review.reviewer.username