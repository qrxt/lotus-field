import React from 'react';
import { render } from 'react-dom';
import './i18n';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScryfallService from '@src/services';
import { ScryfallServiceProvider } from '@components/scryfall-service-context';
import App from '@components/app/app.jsx';
import store from './store';

const scryfallService = new ScryfallService();
const history = createBrowserHistory();

render(
  <Provider store={ store }>
    <ScryfallServiceProvider value={ scryfallService }>
      <Router history={ history }>
        <App />
      </Router>
    </ScryfallServiceProvider>
  </Provider>,
  document.querySelector('.root'),
);
