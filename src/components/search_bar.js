import React, { Component } from 'react';

// Set value to the input
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
// Handler the change on the input
  render () {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
