json.extract! @cart, :id, :user_id

cart_items = @cart.cart_items 

json.products(cart_items) do |cart_item|
	json.extract! cart_item.product, :name, :description, :price, :seller_id
	json.photoUrl url_for(cart_item.product.photo)
	json.extract! cart_item, :quantity
	json.sellerName cart_item.product.seller.username
end