import React, { Component } from "react";
import ProductListing from "../product/product_listing";
export default class SearchResults extends Component {
  componentDidMount() {
    if (Object.values(this.props.products).length < 1) {
      this.props.fetchProducts();
    }
  }

  filterProducts() {
    const { query, products } = this.props;
    const productList = Object.values(products);

    const results = productList.filter((ele) => {
      const name = ele.name.toLowerCase();
      return name.includes(query.toLowerCase());
    });

    return results;
  }

  render() {
    const results = this.filterProducts();
    return (
      <div className="results-wrapper">
        {results.length < 1 ? (
          <>
            <div className="background-results"></div>
            <h2 className="no-results">
              We couldn't find any results for {this.props.query}
            </h2>

            <p>Try searching for something else instead?</p>

          </>
        ) : (
          <div className="results-list">
            {results.map((product) => {
              return (
                <ProductListing
                  key={`search-${product.id}`}
                  product={product}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
