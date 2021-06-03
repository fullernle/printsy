import { connect } from "react-redux";

import { openModal, closeModal } from "../../actions/modal_actions"
import { logout } from "../../actions/session_actions";
import TopNav from "./top_nav";

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(TopNav);
