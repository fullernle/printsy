json.extract! @product, :id, :name, :description, :price
json.photoUrl url_for(@product.photo)