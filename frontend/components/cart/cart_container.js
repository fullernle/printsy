import { connect } from "react-redux";
import { fetchCart } from "../../actions/cart_action";

import Cart from "./cart";

function filterCart(carts, userId) {
	for(let i = 0; i < carts.length; i++) {
		if (carts[i].userId === userId) {
			return carts[i];
		}
	}
	return null;
}

const mSTP = (state) => ({
  cart: filterCart(state, state.session.currentUserId),
	currUserId: state.session.currentUserId
});

const mDTP = (dispatch) => ({
  fetchCart: (userId) => dispatch(fetchCart(userId)),
});

export default connect(mSTP, mDTP)(Cart);