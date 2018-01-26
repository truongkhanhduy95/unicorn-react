import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        term: '',
      };
    }

    render() {
      // TODO: use others kind of binding
      return <WrappedComponent {...this.props} onInputChange={term => this.onInputChange(term)} />;
    }

    onInputChange(term) {
      console.log(term);
      this.setState({ term });
      this.props.onSearchTermChange(term);
    }
  };
