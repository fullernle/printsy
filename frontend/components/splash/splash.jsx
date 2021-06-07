import React from "react";
import SplashProduct from "./splash_product";

class Splash extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  generateSpecial() {
    this.props.products
  }

  generatePopular() {

  }

  generateDiscover() {

  }

  generateSelections() {

  }

  render() {

    return (
      <div className="splash-wrapper">
        <div className="splash-special">
          
        </div>

        <div className="splash-popular">
          {/* <ProductIndexItem /> */}
        </div>

        <div className="splash-discover">
          {/* <ProductIndexItem /> */}
        </div>

        <div className="splash-selections">

        </div>

        <div className="splash-info"></div>
      </div>
    );
  }
}

export default Splash;
