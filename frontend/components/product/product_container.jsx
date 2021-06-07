import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import Product from "./product";

const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.id],
});

const mDTP = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
});

export default connect(mSTP, mDTP)(Product);