import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const nullState = Object.freeze({
  currentUser: null,
});

const sessionReducer = (state = nullState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { ...state, ...currentUser };

    default:
      return state;
  }
};

export default sessionReducer;