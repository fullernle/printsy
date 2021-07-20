import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const search = this.state.search;
    this.setState({ search: "" });
		this.props.history.push(`/search/query="${search}"`)
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="search-section">
          <input
            type="text"
            placeholder="Search for it all"
            value={this.state.search}
            onChange={this.update("search")}
            className="search-bar"
          />
          <button type="submit" className="search-bttn">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </>
    );
  }
}

export default withRouter(SearchBar);
