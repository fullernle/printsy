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
    data: { cartItem },
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
    data: { cartItem },
  });
