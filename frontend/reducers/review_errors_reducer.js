import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW_ERRORS,
  RESET_REVIEW_ERRORS,
} from "../actions/review_action";

const reviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;

    case RECEIVE_REVIEWS:
      return [];

    case RECEIVE_REVIEW:
      return [];

    case RESET_REVIEW_ERRORS:
      return [];

    default:
      return state;
  }
};

export default reviewErrorsReducer;
