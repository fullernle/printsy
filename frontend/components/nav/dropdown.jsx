import React from "react";

export default class DropDown extends React.Component {
  render() {
    return (
      <div>
        <button className="nav-show-menu" onClick={this.props.logout}>
          {this.props.user.username.charAt(0).toUpperCase()}
        </button>

        <div className="nav-menu">

        </div>
      </div>
    );
  }
}