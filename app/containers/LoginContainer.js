import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../actions/index';

const loginContainer = WrappedComponent =>
  class extends Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          onLoginButtonPress={({ username, password }) => this.props.login(username, password)}
        />
      );
    }
  };

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default WrapperComponent =>
  connect(null, mapDispatchToProps)(loginContainer(WrapperComponent));
