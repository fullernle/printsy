import React, { Component } from "react";
import Rating from "react-simple-star-rating";
import StarIcon from "@material-ui/icons/Star";
import { styled } from "@material-ui/core/styles";

const MyStar = styled(StarIcon)({
  color: "#222222",
  width: "20px",
  backgroundColor: "transparent",
});

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
      this.props.createReview(review);

      this.setState({
        rating: null,
        body: "",
        product_id: parseInt(this.props.productId),
        reviewer_id: this.props.currentUser,
      });
    });
  }

  timeStamp(time) {
    let date = new Date(time).toLocaleDateString("en-gb", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "utc",
    });
    return date;
  }

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
        {this.props.currentUser ? (
          <h3>Leave a review!</h3>
        ) : (
          <h3> Sign in to leave a review!</h3>
        )}

        {this.props.currentUser ? this.reviewForm() : null}

        {reviews.map((review) => {
          return (
            <div key={`review-${review.id}`} className="review-wrapper">
              <header className="review-header">
                <span className="user-logo">
                  {review.reviewer.charAt(0).toUpperCase()}
                </span>
                {review.reviewer}
                <span className="review-date">
                  {this.timeStamp(review.created_at)}
                </span>
              </header>
              <section>
                <span>
                  {Array(Math.floor(review.rating)).fill(<MyStar></MyStar>)}{" "}
                </span>
                <p>{review.body}</p>
              </section>
            </div>
          );
        })}
      </div>
    );
  }
}
