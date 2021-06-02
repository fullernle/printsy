import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let oldState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(oldState, {
        [action.currentUser.id]: action.currentUser,
      });
    default:
      return state;
  }
};

export default usersReducer;