import React from "react";
import ProductDropDown from "./product_dropdown";

export default class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      cart_id: null,
      product_id: null,
    };

    this.addToCart = this.addToCart.bind(this);
    this.convertPrice = this.convertPrice.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id).then(() => {
			this.props.currentUser ? 
				this.setState({
					product_id: this.props.product.id,
					cart_id: this.props.cart.id,
				}) : 
				this.setState({
					product_id: this.props.product.id
				})
    });
  }

  addToCart() {
    const { openModal, currentUser } = this.props;
		console.log(this.state);
		const cartItem = Object.assign({}, this.state);
    currentUser ? this.props.addItemToCart(cartItem) : openModal("requireLogin");
  }

  convertPrice(price) {
    return Number.parseFloat(price).toFixed(2);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
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
              <div className="product-price">
                ${this.convertPrice(product.price)}
              </div>

              <div className="product-stock">In Stock</div>
            </div>
            <div className="product-quantity">
              <div className="quantity-title">Quantity</div>
              <select
                className="quantity"
                onChange={this.update("quantity")}
                name="product"
              >
                <option value="1" selected>1</option>
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
              <button className="add-to-cart" onClick={this.addToCart}>
                Add to Cart
              </button>
            </div>
            <div className="product-wants">
              <img
                className="product-icons"
                src="https://images.emojiterra.com/twitter/512px/1f6d2.png"
                alt="shopping cart icon"
              />
              <div className="product-misc-text">
                Other people want this. Over {randomWants} people have this in
                their carts right now.
              </div>
            </div>
            <div className="arrives-by">
              <img
                className="product-icons-truck"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNSlZWjRncneixPudaZn2u2xOCCXD2wkfX2R2olOrSfkGpQG-a9BxpuKRUgJ-s0tRUgAY&usqp=CAU"
                alt="shipping cart icon"
              />
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
