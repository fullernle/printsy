import * as APIUtil from "../util/cart_util";

export const RECEIVE_CART = "RECEIVE_CART";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
export const RECEIVE_CART_ERRORS = "RECEIVE_CART_ERRORS";

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart,
});

export const receiveCartItem = (cartItem) => ({
  type: RECEIVE_CART_ITEM,
  cartItem,
});

export const deleteCartItem = (cartItemId) => ({
  type: DELETE_CART_ITEM,
  cartItemId,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_CART_ERRORS,
  errors,
});

export const fetchCart = (userId) => (dispatch) =>
  APIUtil.fetchCart(userId).then(
    (cart) => dispatch(receiveCart(cart)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const createCart = (userId) => (dispatch) =>
  APIUtil.createCart(userId).then(
    (cart) => dispatch(receiveCart(cart)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const addItemToCart = (cartItem) => (dispatch) => {
  console.log(cartItem);
  APIUtil.addItemToCart(cartItem).then(
    (cart) => dispatch(receiveCart(cart)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const removeItemFromCart = (cartItemId) => (dispatch) =>
  APIUtil.removeItemFromCart(cartItemId).then(
    (cart) => dispatch(receiveCart(cart)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const updateItemInCart = (cartItem) => (dispatch) =>
  APIUtil.updateItemInCart(cartItem).then(
    (cart) => dispatch(receiveCart(cart)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
