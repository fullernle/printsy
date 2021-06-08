import { connect } from "react-redux";
import { filterCategory} from "../../util/category_util";

import Category from "./category"

const mSTP = (state, ownProps) => ({
  products: filterCategory(state, ownProps.match.params.id),
});


export default connect(mSTP, null)(Category);