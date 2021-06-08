import { connect } from "react-redux";
import { fetchCategory } from "../../actions/category_actions";

import Category from "./category";

const mSTP = (state, ownProps) => ({
  category: state.entities.categories[ownProps.match.params.id],
});

const mDTP = (dispatch) => ({
  fetchCategory: (categoryId) => dispatch(fetchCategory(categoryId)),
});

export default connect(mSTP, mDTP)(Category);
