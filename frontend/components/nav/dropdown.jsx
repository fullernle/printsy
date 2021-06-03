import React from "react";

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuHidden: true,
    };

    this._isMounted = false;

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    let newState = !this.state.menuHidden
    this.setState({ menuHidden: newState });
    window.removeEventListener('click', this.closeMenu)
  }

  closeMenu() {
    // let newState = !this.state.menuHidden;
    this.setState({ menuHidden: true })
  }

  componentDidUpdate() {
    const { isMenuHidden } = this.state;
    this._isMounted = true;
    
    this._isMounted && setTimeout(() => {
      if (isMenuHidden) {
        window.removeEventListener("click", this.closeMenu);
      } else {
        window.addEventListener("click", this.closeMenu);
      }
    }, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
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
