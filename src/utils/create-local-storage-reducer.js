import getPropByPath from './get-prop-by-path';
import setPropByPath from './set-prop-by-path';

const mergeData = (reducerDefaults, storedData) => ({
  ...reducerDefaults,
  ...storedData,
});

const createLocalStorageReducer = (
  initialReducer,
  paths,
  serialize = JSON.stringify,
  deserialize = JSON.parse,
  merge = mergeData,
  storage = window.localStorage,
) => {
  if (typeof storage !== 'object' || storage === null) {
    return initialReducer;
  }

  return (state, action) => {
    let localState = state;

    if (typeof localState === 'undefined') {
      const reducerDefaults = initialReducer(undefined, {});

      // try load from local storage
      const stored = storage.getItem('saved');

      const storedData = typeof stored === 'string'
        ? deserialize(stored)
        : {};

      if (Object.keys(storedData).length > 0) {
        const newLocalState = paths.reduce((acc, path) => {
          return { ...acc, ...setPropByPath(acc, path, getPropByPath(storedData, path)) };
        }, reducerDefaults);

        localState = newLocalState;
      } else {
        localState = { ...reducerDefaults, ...storedData };
      }
    }

    const newState = initialReducer(localState, action);

    if (JSON.stringify(localState) !== JSON.stringify(newState)) {
      // console.log('localstate: ', JSON.stringify(localState));
      // console.log('newstate: ', JSON.stringify(newState));

      const resultStorage = paths.reduce((acc, path) => {
        const keyName = path.split('.')[0];
        const fromKeyPath = path.split('.').slice(1).join('.');
        const currentProp = getPropByPath(newState, path);

        return { ...acc, [keyName]: setPropByPath({}, fromKeyPath, currentProp) };
      }, {});

      storage.setItem('saved', serialize(resultStorage));
    }

    // console.log(newState);
    return newState;
  };
};

export default createLocalStorageReducer;
