import React, { Component } from "react";
import Rating from "react-simple-star-rating";

export default class ReviewIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      body: "",
      product_id: this.props.productId,
      reviewer_id: this.props.currentUser,
    };
  }

  componentDidMount() {
    this.props.resetReviewErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleRating = (number) => {
    const rating = { rating: number };
    this.setState(rating);
  };

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview(review);
  }

  reviewForm() {
    return (
      <div className="review-create-container">
        <form action=""></form>
      </div>
    );
  }

  render() {
    const { errors } = this.props;

    return (
      <div className="review-index-container">
        <div className="review-form-container">
          <h3>Leave a review!</h3>

          <form onSubmit={this.handleSubmit} className="review-form">
            <label className="review-rating-wrapper">
              Rating
              <Rating
                onClick={this.handleRating}
                ratingValue={this.state.rating}
                size={20}
                transition
                fillColor="orange"
                emptyColor="gray"
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
      </div>
    );
  }
}
