import React from "react";
import { Link } from "react-router-dom";

const ProductListing = ({ product, className }) => (
  // <div className={`splash-item-link-${index + 1}`}>
  <div className={className}>
    <Link to={`/products/${product.id}`}>
      <div className="photo-wrapper">
        <img
          className="product-photo"
          src={product.photoUrl}
          alt={product.description}
        />
      </div>
      <div className="list-detail-wrapper">
        <div className="list-product-name">{product.name}</div>
        <div className="list-product-seller">{product.seller}</div>
        <div className="list-product-price">
          ${Number.parseFloat(product.price).toFixed(2)}
        </div>
      </div>
    </Link>
  </div>
);

export default ProductListing;
