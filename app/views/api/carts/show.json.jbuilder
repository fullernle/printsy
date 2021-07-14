json.extract! @cart, :id, :user_id

cart_items = @cart.cart_items 

json.producs(cart_items) do |cart_item|
	# json.product cart_item.product 
	json.extract! cart_item.product, :name, :description, :price, :seller_id
	json.extract! cart_item, :quantity
end