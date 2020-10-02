import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';

import ScryfallService from '@services/scryfall-service';
import { ScryfallServiceProvider } from '@components/scryfall-service-context';
import Header from '@components/header';
import { RandomCardPage, MainPage } from '@components/pages';
import './app.css';

// const loading = <div>loading...</div>;
// <Suspense fallback={loading}></Suspense>

const scryfallService = new ScryfallService();

const App = (props) => {
  const { t } = useTranslation();

  return (
    <React.StrictMode>
      <Provider store={ props.store }>
        <ScryfallServiceProvider value={ scryfallService }>
          <Router>
            <Header />
            <main>
              <h1 className="visually-hidden">
                { t('pages.all.h1') }
              </h1>

              <Route
                path="/"
                exact
                component={ MainPage }
              />

              <Route
                path="/random"
                component={ RandomCardPage }
              />
            </main>
          </Router>
        </ScryfallServiceProvider>
      </Provider>
    </React.StrictMode>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
