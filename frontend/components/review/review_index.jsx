import React, { Component } from "react";
import Rating from "react-simple-star-rating";

export default class ReviewIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: null,
      body: "",
      product_id: parseInt(this.props.productId),
      reviewer_id: this.props.currentUser,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.productId);
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
    this.setState({ reviewer_id: this.props.currentUser }, () => {
      const review = Object.assign({}, this.state);
      console.log(review);
      this.props.createReview(review);
    });
  }

  reviewForm() {
    return (
      <div className="review-form-container">
        <h3>Leave a review!</h3>

        {this.renderErrors()}
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
    );
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { reviews } = this.props;
    return (
      <div className="review-index-container">
        {this.props.currentUser ? this.reviewForm() : null}

        {reviews.map((review) => {
          return (
            <div key={`review-${review.id}`} className="review-wrapper">
              <span>{review.rating}</span>
              <p>{review.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
