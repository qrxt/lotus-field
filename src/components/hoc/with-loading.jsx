import React from 'react';
import PropTypes from 'prop-types';

import LoadingSpinner from '@components/loading-spinner';
import ErrorIndicator from '@components/error-indicator';

const withLoading = () => (Wrapped) => {
  const WrappedWithLoading = (props) => {
    const { loading, failure } = props;

    if (loading) {
      return (
        <div className="d-flex justify-content-center">
          <LoadingSpinner />
        </div>
      );
    }

    if (failure) {
      return (
        <div className="d-flex justify-content-center">
          <ErrorIndicator />
        </div>
      );
    }

    return (
      <Wrapped { ...props } />
    );
  };

  WrappedWithLoading.propTypes = {
    loading: PropTypes.bool,
    failure: PropTypes.bool,
  };

  return WrappedWithLoading;
};

export default withLoading;
