[Live site!](http://printsy.herokuapp.com)

![printsyy](https://user-images.githubusercontent.com/63718493/126942397-88c0c172-235c-4c2a-a570-6840ca0912ca.gif)


# Overview

Printsy is an etsy clone that specializes in buying and selling 3d printed items! Similar to Etsy, it is an e-commerce site where users can browse items of various different categories, all with the intent of 3d printing it at home! 

# Built with: 
- React/Redux - Frontend
- Ruby on Rails - Backend
- PostgreSQL - Database
- AWS S3 - Image storage

# Features 
- User Authentication - Users are allowed to create an account, log in, and log out. Demo user is provided for demo purposes
- Products - Product Index page, as well as show page where users are able to view more information and add to cart
- Cart - Displays products of individual sellers, each with their own checkout
- Reviews - Logged in users will be able to create reviews for products with a body and rating of 1 - 5 stars
- Search - Search bar that renders search results of products matching user's search input

# Code Snippets

Cart Container
```jsx
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

  ```
  
  Review Form 
  ```jsx
  reviewForm() {
    return (
      <div className="review-form-container">
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit} className="review-form">
          <label className="review-rating-wrapper">
            Rating
            <Rating
              onClick={this.handleRating}
              ratingValue={this.state.rating}
              size={18}
              transition
              fillColor="orange"
              emptyColor="gray"
              className="review-rating"
            />
          </label>

          <div className="review-body-wrapper">
            <textarea
              value={this.state.body}
              onChange={this.update("body")}
              className="review-body"
            ></textarea>
          </div>

          <br />
          <button className="review-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
  ```
