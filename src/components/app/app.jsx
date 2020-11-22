import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';

import LoadingSpinner from '@components/loading-spinner';
import ButtonUp from '@components/button-up';
import Header from '@components/header';
import Footer from '@components/footer';

import withScryfallService from '@hoc';
import './app.css';

// Pages
const MainPage = lazy(() => import('@pages/main-page.jsx'));
const CardPage = lazy(() => import('@pages/card-page.jsx'));
const CardsPage = lazy(() => import('@pages/cards-page.jsx'));
const SettingsPage = lazy(() => import('@pages/settings-page.jsx'));
const SearchPage = lazy(() => import('@pages/search-page.jsx'));
const WishlistPage = lazy(() => import('@pages/wishlist-page.jsx'));

const loading = (
  <div className="w-100 h-100 d-flex justify-content-center align-items-center">
    <LoadingSpinner />
  </div>
);

const App = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <ButtonUp />
      <Header />
      <main>
        <h1 className="visually-hidden">
          { t('pages.all.h1') }
        </h1>

        <Suspense fallback={ loading }>
          <Switch>
            <Route
              path="/"
              exact
              component={ MainPage }
            />

            <Route
              path="/settings"
              exact
              component={ SettingsPage }
            />

            <Route
              path="/search"
              exact
              component={ SearchPage }
            />

            <Route
              path="/cards"
              exact
              render={ ({ location }) => {
                const { search: queryString } = location;

                return <CardsPage
                  queryString={ queryString }
                  key={ window.location.search }
                />;
              } }
            />

            <Route
              path="/wishlist"
              exact
              component={ WishlistPage }
            />

            <Route
              path="/card/:id"
              render={ ({ match }) => {
                const { id } = match.params;

                return <CardPage
                  cardId={ id }
                  key={ window.location.pathname }
                />;
              } }
            />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </React.Fragment>
  );
};

App.propTypes = {
  scryfallService: PropTypes.object.isRequired,
};

export default withScryfallService()(App);
