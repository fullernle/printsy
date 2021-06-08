import React from "react";
import SplashProduct from "../splash/splash_product";
export default class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategory(this.props.match.params.id);
  }

  render() {
    if (!this.props.category) {
      this.componentDidMount();
      return <div>Loading...</div>;
    } else {
      // console.log(this.props.category)
      let products = Object.values(this.props.category.products);
      return (
        <div className="category-page">
          <div>
            sidebar placeholder
          </div>
          <div className="products-list">
            {products.map((product) => (
              <SplashProduct
                className="category-index-item"
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}
