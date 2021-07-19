import {
  RECEIVE_CATEGORIES,
  RECEIVE_CATEGORY,
} from "../actions/category_actions";

const categoryReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CATEGORY:
      return Object.assign({}, state, {
        [action.category.id]: action.category,
      });

    case RECEIVE_CATEGORIES:
      return action.categories;

    default:
      return state;
  }
};

export default categoryReducer;
