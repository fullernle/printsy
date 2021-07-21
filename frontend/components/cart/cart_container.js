import { connect } from "react-redux";
import {
  fetchCart,
  removeItemFromCart,
  updateItemInCart,
} from "../../actions/cart_action";
import { closeModal, openModal } from "../../actions/modal_actions";
import { filterCart } from "../../util/cart_util";

import Cart from "./cart";

const mSTP = (state) => ({
  cart: filterCart(state.entities.carts, state.session.currentUserId),
  currUserId: state.session.currentUserId,
});

const mDTP = (dispatch) => ({
  fetchCart: (userId) => dispatch(fetchCart(userId)),
  updateCartItem: (quantity) => dispatch(updateItemInCart(quantity)),
  removeCartItem: (cartItemId) => dispatch(removeItemFromCart(cartItemId)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(Cart);
