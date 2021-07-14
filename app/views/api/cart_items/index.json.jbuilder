# json.extract! @cart_item, :quantity, :cart_id, :product_id 
json.cart @cart_item.cart.cart_items, :id, :cart_id, :product_id, :quantity