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
          <span>{this.props.title}</span> <span className="drop-icon">^</span>
        </button>

        {this.state.menuHidden ? null : (
          <div className="product-show-menu-content">{this.props.content}</div>
        )}
      </div>
    );
  }
}
