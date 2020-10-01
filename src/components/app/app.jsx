import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import ScryfallService from '@services/scryfall-service';
import { ScryfallServiceProvider } from '@components/scryfall-service-context';
import Header from '@components/header';
import FeaturesNav from '@components/features-nav';
import './app.css';

// const loading = <div>loading...</div>;
// <Suspense fallback={loading}></Suspense>

const scryfallService = new ScryfallService();

const App = (props) => (
  <React.StrictMode>
    <Provider store={props.store}>
      <ScryfallServiceProvider value={scryfallService}>
        <Header />

        <FeaturesNav />
      </ScryfallServiceProvider>
    </Provider>
  </React.StrictMode>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
