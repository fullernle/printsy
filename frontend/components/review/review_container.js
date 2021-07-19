import { connect } from "react-redux";
import { deleteReview } from "../../actions/review_action";
import Review from "./review_index_item";

const mSTP = (state, ownProps) => ({
  currentUser: state.session.currentUserId,
});

const mDTP = (dispatch) => ({
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
});

export default connect(mSTP, mDTP)(Review);
