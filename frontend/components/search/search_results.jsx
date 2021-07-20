import React, { Component } from "react";

export default class SearchResults extends Component {
  componentDidMount() {
    if (Object.values(this.props.products).length < 1) {
      this.props.fetchProducts();
    }
  }

  fitlerProducts() {
		const {query, products} = this.props;
    const productList = Object.values(products);
		console.log(productList);
    const results = productList.filter(
      (ele) => {
				const name = ele.name.toLowerCase();
				return name.includes(query);
			}
    );

    console.log(results);
  }
  render() {
    return (
      <div>
        {this.fitlerProducts()}
        {this.props.query}
      </div>
    );
  }
}
