import React from "react";
import { Link } from "react-router-dom";

const SplashProduct = ({ product, index }) => (
  <div className={`splash-item-link-${index + 1}`}>
    <Link to={`/products/${product.id}`}>
      <div className="photo-wrapper">
        <img
          className="product-photo"
          src={product.photoUrl}
          alt={product.description}
        />
      </div>
      <div className="splash-category">{product.categories[0].name}</div>
    </Link>
  </div>
);

export default SplashProduct;
