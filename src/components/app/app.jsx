import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Route } from 'react-router-dom';

import Header from '@components/header';
import { MainPage } from '@pages';
import { withScryfallService } from '@hoc';
import './app.css';

// const loading = <div>loading...</div>;
// <Suspense fallback={loading}></Suspense>

const App = ({ scryfallService }) => {
  const { t } = useTranslation();

  const randomCard = scryfallService.getRandomCard();

  console.log(randomCard);

  return (
    <React.Fragment>
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

        {/* <Route
          path="/card/random"
          exact
          component={ RandomCardPage }
        /> */}
      </main>
    </React.Fragment>
  );
};

App.propTypes = {
  scryfallService: PropTypes.object.isRequired,
};

export default withScryfallService()(App);
