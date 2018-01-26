import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectVideo } from '../actions/index';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ onVideoSelect: selectVideo }, dispatch);

export const videoListItem = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.propTypes = {};

  return hocComponent;
};

export default WrapperComponent =>
  connect(mapStateToProps, mapDispatchToProps)(videoListItem(WrapperComponent));
