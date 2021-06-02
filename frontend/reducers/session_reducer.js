import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const nullState = Object.freeze({
  currentUserId: null,
});

const sessionReducer = (state = nullState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUserId: action.currentUser.id };

    case LOGOUT_CURRENT_USER: 
      return nullState;

    default:
      return state;
  }
};

export default sessionReducer;