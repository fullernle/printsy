json.extract! @product, :id, :name, :description, :price
json.photoUrl url_for(@product.photo)
json.categories @product.categories
json.seller @product.seller.username
