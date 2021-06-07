import React from "react";
import { Link } from "react-router-dom";

const SplashProduct = ({ product }) => (
  <li className="splash-item-link">
    <Link to={`/products/${product.id}`}>
      <img
        className="product-photo"
        src={product.photoUrl}
        alt={product.description}
      />
    </Link>
  </li>
);

export default SplashProduct;
