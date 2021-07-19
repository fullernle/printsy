import { connect } from "react-redux";
import { filterCart } from "../../util/cart_util";
import Review from "./review";

const mSTP = (state, ownProps) => ({
	currentUser: state.session.currentUserId,
})

const mDTP = (dispatch) => ({
	
})

export default connect(mSTP, mDTP)(Review);