import React from 'react';

const withCollection = (collection, replacer) => (Wrapped) => {
  const WrappedWithCollection = (props) => {
    if (!props[collection].length) {
      return replacer;
    }

    return (
      <Wrapped { ...props } />
    );
  };

  return WrappedWithCollection;
};

export default withCollection;
