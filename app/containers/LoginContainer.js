import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { login } from '../actions/index';

const loginContainer = WrappedComponent =>
  class extends Component {
    // QUESTION: How's about web?
    static navigationOptions = WrappedComponent.navigationOptions;

    render() {
      console.log(`login props isbusy >>> ${this.props.isBusy}`);
      return (
        <WrappedComponent
          {...this.props}
          onLoginButtonPress={(username, password) =>
            this.props.login(username, password, () => {
              console.log('>>>>>>>>>>>>>>>>>>>>> login success');
              this.props.navigation.navigate('Main');
            })
          }
        />
      );
    }
  };

function mapStateToProps(state) {
  return {
    isBusy: state.isBusy,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default WrapperComponent =>
  connect(mapStateToProps, mapDispatchToProps)(loginContainer(WrapperComponent));
