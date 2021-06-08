import { connect } from "react-redux";
import { fetchProducts } from "../../actions/product_actions";
import { fetchCategories } from "../../actions/category_actions";

import Splash from "./splash";

const mSTP = (state) => ({
  products: Object.values(state.entities.products),
  currentUser: state.entities.users[state.session.currentUserId],
  categories: Object.values(state.entities.categories)
});

const mDTP = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mSTP, mDTP)(Splash);
