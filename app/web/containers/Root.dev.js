import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactNativeWebHelloWorld from './App';
import DevTools from './DevTools';
import PropTypes from 'prop-types';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <ReactNativeWebHelloWorld />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
