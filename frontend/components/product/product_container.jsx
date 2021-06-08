import { connect } from "react-redux";
import { fetchProduct, fetchProducts } from "../../actions/product_actions";
import Product from "./product";

const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.id]
});

const mDTP = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mSTP, mDTP)(Product);