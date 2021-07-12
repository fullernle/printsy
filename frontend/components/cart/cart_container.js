import { connect } from "react-redux";
import { fetchCart } from "../../actions/cart_action";

import Cart from "./cart";

const mSTP = (state) => ({
  cart: state.carts,
});

const mDTP = (dispatch) => ({
  fetchCart: (userId) => dispatch(fetchCart(userId)),
});
