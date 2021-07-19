import React from "react";
import { Link } from "react-router-dom";

const SplashProduct = ({ product, className }) => (
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
    </Link>
  </div>
);

export default SplashProduct;
