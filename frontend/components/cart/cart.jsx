import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: null,
      id: null,
      userId: null,
    };
  }

  componentDidMount() {
    this.props.fetchCart(this.props.currUserId).then((data) => {
      const cart = data.cart;
      this.setState({
        products: cart.products,
        id: cart.id,
        userId: cart.user_id,
      });
    });
  }

  checkout(totalPrice) {
    return (
      <div>
        <h4>How you'll pay</h4>
        <p>This shop processes payment through Paypal</p>
      </div>
    );
  }

  filterSellers(products) {
    const uniqueSellers = [];
    products.forEach((product) => {
      if (!uniqueSellers.includes(product.seller_id))
        uniqueSellers.push(product.seller_id);
    });
    return uniqueSellers;
  }

  filterProducts(sellers, products) {
    const indCarts = [];
    sellers.forEach((id) => {
      const seller = [];
      products.forEach((product) => {
        const sellerId = product.seller_id;
        if (id === sellerId) {
          seller.push(product);
        }
      });
      indCarts.push(seller);
    });
    return indCarts;
  }

  individualCarts(products) {
    const uniqueSellers = this.filterSellers(products);
    const indCarts = this.filterProducts(uniqueSellers, products);
    return indCarts;
  }

  displayCarts(products) {
    const carts = this.individualCarts(products);

    return carts.map((cart) => {
      return this.renderCart(cart);
    });
  }

  updateQuantity(name) {
    return (e) => {
      console.log(e.currentTarget.value);
    };
  }
  renderCart(cart) {
    const seller = cart[0].sellerName;
    console.log(cart);
    return (
      <div key={cart[0].seller_id} className="ind-cart-wrapper">
        <header className="ind-seller-header">
          <h4>{seller}</h4>
          <p>Contact Shop</p>
        </header>
        {cart.map((product) => {
          let quantity = product.quantity;
          return (
            <div className="detail-wrapper">
              <div className="photo-wrapper">
                <img src={`${product.photoUrl}`} alt="product image" />
              </div>

              <div className="non-photo-wrapper">
                <div className="fine-details">
                  <p>{product.name}</p>
                  <button>Remove</button>
                </div>

                <div className="quantitative-details">
                  <select
                    className="ind-quantity"
                    name={`${product.name}`}
                    onChange={this.updateQuantity(product.name)}
                  >
                    <option
                      value="1"
                      selected={product.quantity === 1 ? true : false}
                    >
                      1
                    </option>
                    <option
                      value="2"
                      selected={product.quantity === 2 ? true : false}
                    >
                      2
                    </option>
                    <option
                      value="3"
                      selected={product.quantity === 3 ? true : false}
                    >
                      3
                    </option>
                    <option
                      value="5"
                      selected={product.quantity === 4 ? true : false}
                    >
                      5
                    </option>
                    <option
                      value="4"
                      selected={product.quantity === 5 ? true : false}
                    >
                      4
                    </option>
                    <option
                      value="6"
                      selected={product.quantity === 6 ? true : false}
                    >
                      6
                    </option>
                    <option
                      value="7"
                      selected={product.quantity === 7 ? true : false}
                    >
                      7
                    </option>
                    <option
                      value="8"
                      selected={product.quantity === 8 ? true : false}
                    >
                      8
                    </option>
                    <option
                      value="9"
                      selected={product.quantity === 9 ? true : false}
                    >
                      9
                    </option>
                    <option
                      value="10"
                      selected={product.quantity === 10 ? true : false}
                    >
                      10
                    </option>
                  </select>

                  <div>
                    <div>{product.price * product.quantity}</div>
                    <div>{product.quantity > 1 ? product.price : ""}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    if (this.props.cart === null || this.state.products === null) {
      return null;
    }
    const { products } = this.state;

    return (
      <div className="cart-wrapper">
        <header className="cart-header">
          <h3>{products.length} items in your cart</h3>
          <Link to="/">Keep Shopping</Link>
        </header>
        {this.displayCarts(products)}
      </div>
    );
  }
}
