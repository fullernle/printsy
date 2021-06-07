@products.each do |product|
  json.set! product.id do 
    json.extract! product, :id, :name, :description, :price, :seller_id 
    json.photoUrl url_for(product.photo)
  end
end