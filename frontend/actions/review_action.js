import * as APIUtil from "../util/review_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const RESET_REVIEW_ERRORS = "RESET_REVIEW_ERRORS";

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors,
});

export const deleteReview = (reviewId) => ({
  type: DELETE_REVIEW,
  reviewId,
});

export const resetErrors = () => ({
  type: RESET_REVIEW_ERRORS,
});

export const fetchReviews = (productId) => (dispatch) =>
  APIUtil.fetchReviews(productId).then(
    (reviews) => dispatch(receiveReviews(reviews)),
    (errors) => dispatch(receiveErrors(errors))
  );

export const createReview = (review) => (dispatch) =>
  APIUtil.createReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (errors) => dispatch(receiveErrors(errors))
  );

export const deleteReview = (reviewId) => (dispatch) =>
  APIUtil.deleteReview(reviewId).then(
    (review) => dispatch(deleteReview(review.id)),
    (errors) => dispatch(receiveErrors(errors))
  );

export const updateReview = (review) => (dispatch) =>
  APIUtil.updateReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (errors) => dispatch(receiveErrors(errors))
  );
