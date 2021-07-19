import React from "react";
import SplashProduct from "./splash_product";
import GreetingContainer from "../home/greeting_container";
import SplashCategory from "./splash_category";
import ProductListing from "../product/product_listing";

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      special: [],
      discover: [],
    };

    this.generateSpecial = this.generateSpecial.bind(this);
    this.generateRandom = this.generateRandom.bind(this);

    this.state = {
      special: null,
      popular: null,
      discover: null,
      selections: null,
    };
  }

  componentDidMount() {
    // this.props.fetchCategories();
    // this.props.fetchProducts().then(() => this.props.fetchCategories());
    this.props.fetchProducts().then(() => {
      this.setState({
        special: this.generateSpecial(),
        popular: this.generateSpecial(),
      });
    });
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
    if (!this.props.products) {
      return <h1 className="loading">Loading...</h1>;
    } else {
      return (
        <div className="splash-wrapper">
          {this.props.currentUser ? <GreetingContainer /> : ""}

          <div className="special-background">
            <h1 className="special-header">
              Because everyone deserves something as unique as they are.
            </h1>
            <h3 className="special-sub-header">Shop special finds</h3>

            <div className="splash-special">
              {this.state.special === null
                ? ""
                : this.state.special.map((product, i) => (
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
            <h2 className="popular-header">Popular gifts right now</h2>
            <div className="popular-list">
              {this.state.popular === null
                ? ""
                : this.state.popular.map((product, i) => (
                    <ProductListing
                      className={`popular-item-link-${i + 1}`}
                      product={product}
                      index={i}
                      key={product.id}
                    />
                  ))}
            </div>
          </div>

          <div className="splash-discover">
            {this.state.discover === null
              ? ""
              : this.state.discover.map((product, i) => (
                  <SplashProduct
                    className={`discover-item-link-${i + 1}`}
                    product={product}
                    index={i}
                    key={product.id}
                  />
                ))}
          </div>

          <div className="splash-selections">
            {this.state.selections === null
              ? ""
              : this.state.selections.map((product, i) => (
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
