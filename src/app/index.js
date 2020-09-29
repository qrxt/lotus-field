import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import './i18n';

import reducer from '@reducers/reducer';
import App from '@components/app/app.jsx';

const store = createStore(reducer);

render(
  <App store={store} />,
  document.querySelector('.root'),
);
