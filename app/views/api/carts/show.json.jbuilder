json.extract! @cart, :id, :user_id
@cart.cart_items.each do |cart_item|
  json.set! cart_item.id do 
    json.extract! cart_item, :id, :quantity, :cart_id, :product_id
  end
end