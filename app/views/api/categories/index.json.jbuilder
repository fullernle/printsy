@categories.each do |category|
  json.set! category.id do 
    json.extract! category, :id, :name 
    json.products category.products
  end
end