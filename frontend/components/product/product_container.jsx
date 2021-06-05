import { connect } from "react-redux";

import Product from "./product";

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mDTP = (dispatch) => ({});

export default connect(mSTP, mDTP)(Product);
