import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  render() {
    // console.log('search_bar is re-rendering...');
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    console.log(term);
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(SearchBar);
