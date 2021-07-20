import { connect } from "react-redux";
import {
  createReview,
  fetchReviews,
  resetErrors,
} from "../../actions/review_action";
import ReviewIndex from "./review_index";

const mSTP = (state, ownProps) => ({
  currentUser: state.session.currentUserId,
  errors: state.errors.reviews,
  reviews: state.entities.reviews,
});

const mDTP = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  fetchReviews: (productId) => dispatch(fetchReviews(productId)),
  resetReviewErrors: () => dispatch(resetErrors()),
});

export default connect(mSTP, mDTP)(ReviewIndex);
