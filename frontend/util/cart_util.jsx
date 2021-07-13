export const fetchCart = (userId) =>
  $.ajax({
    method: "GET",
    url: `/api/carts/${userId}`,
  });

export const createCart = (userId) =>
  $.ajax({
    method: "POST",
    url: "/api/carts",
    data: { cart: { user_id: userId } },
  });

export const addItemToCart = (cartItem) =>
  $.ajax({
    method: "POST",
    url: "/api/cart_items",
    data: { cart_item: cartItem },
  });

export const removeItemFromCart = (cartItemId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/cart_items/${cartItemId}`,
  });

export const updateItemInCart = (cartItem) =>
  $.ajax({
    method: "PATCH",
    url: `/api/cart_items/${cartItem.id}`,
    data: { cart_item: cartItem },
  });


export const filterCart = (carts, userId) => {
  for (const i in carts) {
    if (carts[i].user_id === userId) {
			return carts[i]
    }
  }
  return null;
}