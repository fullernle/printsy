import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "Search for it all",
    };
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  render() {
    return (
      <div className="search-section">
        <input
          type="text"
          placeholder={this.state.search}
          onChange={this.update("search")}
          className="search-bar"
        />
        <button className="search-bttn">
          <i className="fas fa-search"></i>
        </button>
      </div>
    );
  }
}

export default SearchBar;
