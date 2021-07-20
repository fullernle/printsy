import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";
import SearchResults from "./search_results";
import { fetchProducts } from "../../actions/product_actions";

const mSTP = (state, ownProps) => ({
  query: ownProps.match.params.query,
	products: state.entities.products,
});

const mDTP = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default withRouter(connect(mSTP, mDTP)(SearchResults));
