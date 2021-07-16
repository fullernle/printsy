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

  updateQuantity(currProduct) {
    return (e) => {
      const newQuant = e.currentTarget.value;
      let  product = this.state.products.filter((obj) => obj.name === currProduct.name);
      product[0].quantity = parseInt(newQuant);
			product = product[0];

      const updatedCartItem = {
        id: product.cart_item_id,
        cart_id: product.cart_id,
        product_id: product.id,
        quantity: newQuant,
      };
			
      console.log(updatedCartItem);
      this.props.updateCartItem(updatedCartItem);
    };
  }

  renderCart(cart) {
    const seller = cart[0].sellerName;
    let totalPrice = 0;
    return (
      <div key={cart[0].seller_id} className="ind-cart-wrapper">
        <div className="non-checkout-wrapper">
          <header className="ind-seller-header">
            <h4>{seller}</h4>
            <p className="contact">Contact Shop</p>
          </header>

          {cart.map((product) => {
            totalPrice += product.quantity * product.price;
            return (
              <div className="detail-wrapper">
                <div className="photo-wrapper">
                  <img src={`${product.photoUrl}`} alt="product image" />
                </div>

                <div className="non-photo-wrapper">
                  <div className="fine-details">
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <button className="rmv bttn">Remove</button>
                  </div>

                  <div className="quantitative-details">
                    <select
                      className="ind-quantity"
                      name={`${product.name}`}
                      onChange={this.updateQuantity(product)}
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

                    <section>
                      <div className="total-product-price">
                        ${(product.price * product.quantity).toFixed(2)}
                      </div>
                      <div className="ind-product-price">
                        {product.quantity > 1 ? (
                          <span className="mini-price">
                            {" "}
                            (${product.price.toFixed(2)} each)
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {this.renderCheckout(totalPrice.toFixed(2))}
      </div>
    );
  }

  renderCheckout(totalPrice) {
    return (
      <div className="checkout-wrapper">
        <div className="price-total">
          Item(s) total
          <span>${totalPrice}</span>
        </div>

        <div className="sub-total">
          Subtotal
          <span>${totalPrice}</span>
        </div>

        <div className="shipping">
          Shipping
          <span>FREE</span>
        </div>

        <button className="chkt bttn">Checkout</button>
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
