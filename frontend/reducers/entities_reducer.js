import { combineReducers } from "redux";
import categoryReducer from "./category_reducer";
import productReducer from "./product_reducer";
import usersReducer from "./users_reducer";
import cartsReducer from "./cart_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productReducer,
  categories: categoryReducer,
  carts: cartsReducer,
});

export default entitiesReducer;
