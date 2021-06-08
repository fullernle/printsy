json.extract! @category, :id, :name 
json.products do 

  @category.products.each do |product|
    json.set! product.id do 
      json.extract! product, :id, :name, :description, :price
      json.photoUrl url_for(product.photo)
      json.categories product.categories
      json.seller product.seller.username
    end
  end

end

