import { connect } from "react-redux";
import { fetchCart } from "../../actions/cart_action";
import { filterCart } from "../../util/cart_util";

import Cart from "./cart";


const mSTP = (state) => ({
  cart: filterCart(state.entities.carts, state.session.currentUserId),
	currUserId: state.session.currentUserId
});

const mDTP = (dispatch) => ({
  fetchCart: (userId) => dispatch(fetchCart(userId)),
});

export default connect(mSTP, mDTP)(Cart);