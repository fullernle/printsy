import * as APIUtil from "../util/cart_util";

export const RECEIVE_CART = "RECEIVE_CART";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart,
});

export const RECEIVE_CART_ITEM = (cartItem) => ({
  type: RECEIVE_CART_ITEM,
  cartItem,
});

export const DELETE_CART_ITEM = (cartItemId) => ({
  type: DELETE_CART_ITEM,
  cartItemId,
});

export const fetchCart = (userId) => (dispatch) => 
  APIUtil.create
