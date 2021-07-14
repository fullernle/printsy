import React, { Component } from "react";

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
    console.log("mounted");
  }

  productWrapper(product) {
    return (
      <div>
        {product.name}
        {product.description}
        {product.quantity}
        {product.price}
      </div>
    );
  }

  render() {
    console.log("RENDERING");
    console.log(this.state);
    if (this.props.cart === null || this.state.products === null) {
      return null;
    }
    const { products } = this.state;

    return (
      <div className="cart-wrapper">
        {products.map((product) => this.productWrapper(product))}
      </div>
    );
  }
}
