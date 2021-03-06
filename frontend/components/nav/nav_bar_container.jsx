import { connect } from "react-redux";

import { openModal, closeModal } from "../../actions/modal_actions";
import { logout, resetSessionErrors } from "../../actions/session_actions";
import NavBar from "./nav_bar";

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => {
    dispatch(resetSessionErrors());
    dispatch(openModal(modal));
  },
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(NavBar);
