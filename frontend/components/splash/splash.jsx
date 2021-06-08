import React from "react";
import SplashProduct from "./splash_product";

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.special = null;

    this.generateSpecial = this.generateSpecial.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  generateSpecial() {
    let special = [];

    while (special.length !== 6) {
      let i = Math.floor(Math.random() * this.props.products.length);
      if (!special.includes(this.props.products[i])) {
        special.push(this.props.products[i]);
      }
      
    }

    return special;
  }

  generatePopular() {}

  generateDiscover() {}

  generateSelections() {}

  render() {
    let special = null;
    if (this.props.products.length > 0) {
      special = this.generateSpecial();
    }

    console.log(special)
    return (
      <div className="splash-wrapper">
        <div className="special-background">
          <h1 className="special-header">Because everyone deserves something as unique as they are.</h1>
          <h3 className="special-sub-header">Shop special finds</h3>
          <div className="splash-special">
            {special === null
              ? ""
              : special.map((product, i) => (
                  <SplashProduct product={product} index={i} key={product.id} />
                ))}
          </div>
        </div>
        <div className="splash-popular">{/* <ProductIndexItem /> */}</div>

        <div className="splash-discover">{/* <ProductIndexItem /> */}</div>

        <div className="splash-selections"></div>

        <div className="splash-info"></div>
      </div>
    );
  }
}

export default Splash;
