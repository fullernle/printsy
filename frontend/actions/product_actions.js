import * as APIUtil from "../util/product_util";

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product,
});

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

export const receiveProductErrors = (errors) => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors,
});

export const fetchProduct = (productId) => (dispatch) =>
  APIUtil.showProduct(productId).then(
    (product) => dispatch(receiveProduct(product)),
    (errors) => dispatch(receiveProductErrors(errors.responseJSON))
  );

export const fetchProducts = () => (dispatch) =>
  APIUtil.allProducts().then(
    (product) => dispatch(receiveProducts(product)),
    (errors) => dispatch(receiveProductErrors(errors.responseJSON))
  );

export const createProduct = (product) => (dispatch) =>
  APIUtil.createProduct(product).then(
    (product) => dispatch(receiveProduct(product)),
    (errors) => dispatch(receiveProductErrors(errors.responseJSON))
  );
