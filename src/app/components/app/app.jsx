import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import './app.css';

import Header from '../header/header.jsx';

const App = (props) => (
  <Provider store={props.store}>
    <Header />
    <div className="wrapper">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
