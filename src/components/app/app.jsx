import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';

import Header from '@components/header';
import { MainPage, CardPage } from '@pages';
import { withScryfallService } from '@hoc';
import './app.css';

// const loading = <div>loading...</div>;
// <Suspense fallback={loading}></Suspense>

const App = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Header />
      <main>
        <h1 className="visually-hidden">
          { t('pages.all.h1') }
        </h1>

        <Switch>
          <Route
            path="/"
            exact
            component={ MainPage }
          />

          <Route
            path="/card"
            exact
            component={ CardPage }
          />
          <Route
            path="/card/:id"
            render={ ({ match }) => {
              const { id } = match.params;

              return <CardPage cardId={ id } />;
            } }
          />
        </Switch>
      </main>
    </React.Fragment>
  );
};

App.propTypes = {
  scryfallService: PropTypes.object.isRequired,
};

export default withScryfallService()(App);
