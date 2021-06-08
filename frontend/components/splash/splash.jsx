import React from "react";
import SplashProduct from "./splash_product";
import GreetingContainer from "../home/greeting_container";
import SplashCategory from "./splash_category";

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.generateSpecial = this.generateSpecial.bind(this);
    this.generateRandom = this.generateRandom.bind(this);
  }

  componentDidMount() {
    // this.props.fetchCategories();
    this.props.fetchProducts().then(() => this.props.fetchCategories());
  }

  generateSpecial() {
    let randomCategories = [];

    while (randomCategories.length !== 6) {
      let i = Math.floor(Math.random() * this.props.products.length);
      let currItem = this.props.products[i];

      if (!randomCategories.includes(currItem)) {
        let hasCategory;

        for (let i = 0; i < randomCategories.length; i++) {
          let currItemCategory = currItem.categories[0].id;
          let randomCategory = randomCategories[i].categories[0].id;

          if (currItemCategory === randomCategory) {
            hasCategory = true;
            break;
          } else {
            hasCategory = false;
          }
        }

        if (hasCategory) {
        } else {
          randomCategories.push(this.props.products[i]);
        }
      }
    }

    return randomCategories;
  }

  generateRandom() {
    let random = [];

    while (random.length !== 6) {
      let i = Math.floor(Math.random() * this.props.products.length);
      if (!random.includes(this.props.products[i])) {
        random.push(this.props.products[i]);
      }
    }

    return random;
  }

  render() {
    let special = [];
    let popular = [];
    let discover = [];
    let selections = [];

    if (this.props.products.length > 6) {
      special = this.generateSpecial();
      // popular = this.generateRandom();
      // discover = this.generateRandom();
      // selections = this.generateRandom();
    }

    if (!this.props.products) {
      return <h1 className="loading">Loading...</h1>;
    } else {
      return (
        <div className="splash-wrapper">
          {this.props.currentUser ? (
            <GreetingContainer  />
          ) : (
            ""
          )}

          <div className="special-background">
            <h1 className="special-header">
              Because everyone deserves something as unique as they are.
            </h1>
            <h3 className="special-sub-header">Shop special finds</h3>

            <div className="splash-special">
              {special === null
                ? ""
                : special.map((product, i) => (
                    <SplashCategory
                      id={product.categories[0].id}
                      className={`special-item-link-${i + 1}`}
                      product={product}
                      index={i}
                      key={product.id}
                    />
                  ))}
            </div>
          </div>

          <div className="splash-popular">
            {popular === null
              ? ""
              : popular.map((product, i) => (
                  <SplashProduct
                    className={`popular-item-link-${i + 1}`}
                    product={product}
                    index={i}
                    key={product.id}
                  />
                ))}
          </div>

          <div className="splash-discover">
            {discover === null
              ? ""
              : discover.map((product, i) => (
                  <SplashProduct
                    className={`discover-item-link-${i + 1}`}
                    product={product}
                    index={i}
                    key={product.id}
                  />
                ))}
          </div>

          <div className="splash-selections">
            {selections === null
              ? ""
              : selections.map((product, i) => (
                  <SplashProduct
                    className={`selection-item-link-${i + 1}`}
                    product={product}
                    index={i}
                    key={product.id}
                  />
                ))}
          </div>

          <div className="splash-info"></div>
        </div>
      );
    }
  }
}

export default Splash;
