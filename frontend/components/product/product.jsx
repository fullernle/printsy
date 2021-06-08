import React from "react";
import { showProduct } from "../../util/product_util";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  render() {
    const { product } = this.props;

    let randomSales = Math.floor(Math.random() * 1000);
    let randomWants = Math.floor(Math.random() * 30);

    if (!product) {
      return <h1 className="loading">Loading...</h1>;
    } else {
      return (
        <div className="product-page">
          <div className="product-photo-wrapper">
            <div className="photo-sidebar">
              <img src={product.photoUrl} alt="" />
            </div>
            <div className="product-photo-viewer">
              <img
                className="product-actual-photo"
                src={product.photoUrl}
                alt=""
              />
            </div>
          </div>

          <div className="product-info-sidebar">
            <div className="seller-info">{product.seller}</div>
            <div className="num-sales">{randomSales} sales</div>
            <div className="average-rating"></div>

            <div className="product-title">{product.name}</div>

            <div className="product-price">${product.price}</div>
            <div className="product-quantity">
              <select name="product">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div>
              <button className="buy-it-now">Buy It Now</button>
            </div>
            <div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
            <div className="product-wants">
              <strong>Other people want this.</strong> {randomWants} people have this in their carts right now.
            </div>
            <div className="arrives-by">
              Arrives by tomorrow if you order today. Hooray! This item ships
              free.
            </div>

            <div className="product-highlights">
              <h4>Highlights:</h4>
            </div>

            <div className="product-description">
              <h4>Description:</h4>
              {product.description}
            </div>

            <div className="seller">
              Meet your seller 
              <div className="seller-link">
                
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
