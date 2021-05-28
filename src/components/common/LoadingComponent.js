import PropTypes from 'prop-types';
import React from 'react';

function LoadingComponent(props) {
  const { message } = props;

  return (
    <div
      style={{
        textAlign: 'center',
        fontSize: '30px',
        color: 'rgb(37, 78, 219)',
      }}
    >
      <strong>{message}</strong>
    </div>
  );
}

export default LoadingComponent;

LoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
