import React from "react";
import { showProduct } from "../../util/product_util";
import ProductDropDown from "./product_dropdown";

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

            <div className="price-stock">
              <div className="product-price">${parseFloat(product.price)}</div>

              <div className="product-stock">In Stock</div>
            </div>
            <div className="product-quantity">
              <span className="quantity-title">Quantity</span>
              <select className="quantity" name="product">
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

            {/* <div>
              <button className="buy-it-now">Buy It Now</button>
            </div> */}
            <div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
            <div className="product-wants">
              <div className="product-icons">🛒</div>
              <div className="product-misc-text">
                Other people want this. Over {randomWants} people have this in
                their carts right now.
              </div>
            </div>
            <div className="arrives-by">
              <div className="product-icons">🚛</div>
              <div className="product-misc-text">
                Arrives by tomorrow if you order today. Hooray! This item ships
                free.
              </div>
            </div>

            <div className="product-highlights">
              <ProductDropDown title="Highlights" content="Hand made!" />
            </div>

            <div className="product-description">
              <ProductDropDown
                title="Description"
                content={product.description}
              />
            </div>

            <div className="seller">
              <ProductDropDown
                title="Meet Your Seller"
                content={product.seller}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}
