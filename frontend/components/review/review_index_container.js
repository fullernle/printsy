import { connect } from "react-redux";
import { createReview } from "../../actions/review_action";
import ReviewIndex from "./review_index";

const mSTP = (state, ownProps) => ({
  currentUser: state.session.currentUserId,
});

const mDTP = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
});

export default connect(mSTP, mDTP)(ReviewIndex);
