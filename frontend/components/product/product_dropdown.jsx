import React from "react";

export default class ProductDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuHidden: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    e.preventDefault();
    let newState = !this.state.menuHidden;
    this.setState({ menuHidden: newState });
  }

  render() {
    return (
      <div>
        <button className="product-show-menu" onClick={this.toggleMenu}>
          <span>{this.props.title}</span>
          <img
            className="drop-icon"
            src="https://static.thenounproject.com/png/16957-200.png"
            alt="down-arrow"
          />
        </button>

        {this.state.menuHidden ? null : (
          <div id="drop-down" className="product-show-menu-content">
            {this.props.content}
          </div>
        )}
      </div>
    );
  }
}
