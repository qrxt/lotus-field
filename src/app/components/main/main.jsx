import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ value, decrement, increment }) => (
  <div className="container">
    <h1 className="some-user-class">Hello from ReactJS</h1>
    <div>
      <button className="btn btn-primary mr-3" onClick={ decrement }>
        -
      </button>

      <span>
        { value }
      </span>

      <button className="btn btn-primary ml-3" onClick={ increment }>
        +
      </button>
    </div>
  </div>
);

Main.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default Main;
