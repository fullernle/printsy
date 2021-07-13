import { connect } from "react-redux";
import { fetchProduct, fetchProducts } from "../../actions/product_actions";
import Product from "./product";
import { openModal } from "../../actions/modal_actions";
import { addItemToCart } from "../../actions/cart_action";

const mSTP = (state, ownProps) => ({
  currentUser: state.session.currentUserId,
  product: state.entities.products[ownProps.match.params.id],
});

const mDTP = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  fetchProducts: () => dispatch(fetchProducts()),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(Product);
