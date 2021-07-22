import { connect } from "react-redux";
import {
  createReview,
  fetchReviews,
  resetErrors,
} from "../../actions/review_action";
import ReviewIndex from "./review_index";

const filterReviews = (reviews, productId) => {
  const currReviews = [];
	reviews = Object.values(reviews);
	
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].product_id === parseInt(productId)) {
      currReviews.push(reviews[i]);
    }
  }

  return currReviews.reverse();
};

const mSTP = (state, ownProps) => ({
  currentUser: state.session.currentUserId,
  errors: state.errors.reviews,
  reviews: filterReviews(state.entities.reviews, ownProps.productId),
});

const mDTP = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  fetchReviews: (productId) => dispatch(fetchReviews(productId)),
  resetReviewErrors: () => dispatch(resetErrors()),
});

export default connect(mSTP, mDTP)(ReviewIndex);
