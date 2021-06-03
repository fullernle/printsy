import React from "react";

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuHidden: true,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    let newState = !this.state.menuHidden
    this.setState({ menuHidden: newState });
  }

  closeMenu() {
    this.setState({ menuHidden: true })
  }

  componentDidUpdate() {

    setTimeout(() => {
      if (this.state.menuHidden === true) {
        window.removeEventListener("click", this.closeMenu);
      } else {
        window.addEventListener("click", this.closeMenu);
      }
    }, 0);

  }

  componentWillUnmount() {
    window.removeEventListener('click', this.closeMenu);
  }

  render() {
    return (
      <div>
        <button className="nav-show-menu" onClick={this.showMenu}>
          {this.props.user.username.charAt(0).toUpperCase()}
        </button>

        {this.state.menuHidden ? null : (
          <div className="nav-menu">
            <button onClick={this.props.logout}>Logout</button>
          </div>
        )}
      </div>
    );
  }
}
