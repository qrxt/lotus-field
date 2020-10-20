import { createStore } from 'redux';
import reducer from '@reducers';

import createLocalStorageReducer from '@utils/create-local-storage-reducer';

const store = createStore(
  createLocalStorageReducer(reducer, [
    'recentCards.cardIds',
    'wishlist.cardIds',
  ]),

  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-enable */
);

export default store;
