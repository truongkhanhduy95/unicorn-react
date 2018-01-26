import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const mapStateToProps = state => ({ videos: state.videos });

export const mapDispatchToProps = {};

export const videoList = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.propTypes = {};

  return hocComponent;
};

export default WrapperComponent =>
  connect(mapStateToProps, mapDispatchToProps)(videoList(WrapperComponent));
