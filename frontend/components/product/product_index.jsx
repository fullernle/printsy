import React from "react";
import ProductIndexItem from "./product_index_item"

class ProductIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render () {
    return (
      <>
        <ul className="products">
          { this.props.products.map(product => (
            <ProductIndexItem product={product} key={product.id} />
          ))}
        </ul>
      </>
    )
  }

}