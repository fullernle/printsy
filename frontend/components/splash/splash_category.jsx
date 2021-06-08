import React from "react";
import { Link } from "react-router-dom";

const SplashCategory = ({ product, className }) => (
  <div className={className}>
    <Link to={`/categories/${product.categories[0].id}`}>
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

export default SplashCategory;
