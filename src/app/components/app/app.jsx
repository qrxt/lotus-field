import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import './app.css';

import Header from '@components/header/header.jsx';
import CardsService from '@services/cards-service';

/***/
const cardsService = new CardsService();

cardsService.getRandom()
  .then((randomCard) => console.log(randomCard))
  .catch(console.error);
/***/

const loading = <div>loading...</div>;

const App = (props) => (
  <React.StrictMode>
    <Provider store={props.store}>
      <Suspense fallback={loading}>
        <Header />
        <div className="wrapper">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </Suspense>
    </Provider>
  </React.StrictMode>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
