import React from "react";
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
      return <div className="loading">Loading...</div>;
    } else {
      console.log("RETURN MAH PRODUCTS PLS")
      let products = Object.values(this.props.category.products);

      return (
        <div className="category-page">
          <div>sidebar placeholder</div>
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
