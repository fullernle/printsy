import React from "react";
import Loading from "../loading/loading";
import ProductListing from "../product/product_listing";
export default class Category extends React.Component {
  constructor(props) {
    super(props);

    this.getCategory = this.getCategory.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategory(this.props.match.params.id);
  }

  getCategory() {
    this.props.fetchCategory(this.props.match.params.id);
  }

  render() {
    if (!this.props.category) {
      this.getCategory();
      return Loading;
    } else {
      let products = Object.values(this.props.category.products);

      return (
        <div className="category-page">
          <h1>{this.props.category.name}</h1>
          <div className="products-list">
            {products.map((product) => (
              <ProductListing
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
