import * as APIUtil from "../util/product_util";

export const RECEIVE_CURRENT_PRODUCT = "RECEIVE_CURRENT_PRODUCT";

export const receiveCurrentProduct = (product) => ({
  type: RECEIVE_CURRENT_PRODUCT,
  product,
});

export const createProduct = (product) => (dispatch) =>
  APIUtil.createProduct(product).then((product) =>
    dispatch(receiveCurrentProduct(product))
  );

export const 