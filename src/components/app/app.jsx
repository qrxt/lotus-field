import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';

import ButtonUp from '@components/button-up';
import Header from '@components/header';
import Footer from '@components/footer';
import {
  MainPage,
  CardPage,
  CardsPage,
  SettingsPage,
  SearchPage,
  WishlistPage,
} from '@pages';
import { withScryfallService } from '@hoc';
import './app.css';

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

              return <CardsPage queryString={ queryString } />;
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
      </main>
      <Footer />
    </React.Fragment>
  );
};

App.propTypes = {
  scryfallService: PropTypes.object.isRequired,
};

export default withScryfallService()(App);
