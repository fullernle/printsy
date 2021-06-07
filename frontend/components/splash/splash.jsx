import React from "react";
import ProductContainer from "../product/product_container"

const Splash = () => (
  <div className="splash-wrapper">
    <div className="splash-special"></div>
    <div className="splash-popular"></div>
    <div className="splash-discover"></div>
    <div className="splash-selections"></div>
    <div className="splash-info"></div>

    <ProductContainer />
  </div>
)

export default Splash  
