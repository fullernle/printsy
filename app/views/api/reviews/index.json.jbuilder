puts @reviews
@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :rating, :body, :product_id, :reviewer_id
    json.reviewer review.reviewer.username
    json.product review.product
  end
end
