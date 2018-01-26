import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const mapStateToProps = state => ({ video: state.activeVideo });

export const mapDispatchToProps = {};

export const videoDetail = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.propTypes = {};

  return hocComponent;
};

export default WrapperComponent =>
  connect(mapStateToProps, mapDispatchToProps)(videoDetail(WrapperComponent));
