import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Main from '../../containers/main.jsx';

const App = (props) => (
  <Provider store={props.store}>
    <Main />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
