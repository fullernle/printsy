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
    const indCarts = {};
    sellers.forEach((id) => {
      const seller = [];
      products.forEach((product) => {
        const sellerId = product.seller_id;
        if (id === sellerId) {
          seller.push(product);
        }
      });
			indCarts[id] = seller;
    });
    return indCarts;
  }

  individualCarts(products) {
    const uniqueSellers = this.filterSellers(products);
    const indCart = this.filterProducts(uniqueSellers, products);
	}

	displayCarts(carts) {

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
        {this.individualCarts(products)}
      </div>
    );
  }
}
