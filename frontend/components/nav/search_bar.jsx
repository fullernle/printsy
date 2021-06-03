import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: 'Search for it all'
    }
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }


  render () {
    return (
      <div className="search-bar">
        <input type="text" 
          value={this.state.search}
          onChange={this.update("search")}
        />
      </div>
    )
  }
}

export default SearchBar;