import { combineReducers } from "redux";
import productReducer from "./product_reducer";
import usersReducer from "./users_reducer";


const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productReducer
});

export default entitiesReducer;