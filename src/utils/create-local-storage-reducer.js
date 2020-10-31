import getPropByPath from './get-prop-by-path';
import setPropByPath from './set-prop-by-path';

const createLocalStorageReducer = (
  initialReducer,
  paths,
  serialize = JSON.stringify,
  deserialize = JSON.parse,
  storage = window.localStorage,
) => {
  if (typeof storage !== 'object' || storage === null) {
    return initialReducer;
  }

  return (state, action) => {
    let localState = state;

    if (typeof localState === 'undefined') {
      const reducerDefaults = initialReducer(undefined, {});

      const stored = storage.getItem('saved');

      const storedData = typeof stored === 'string'
        ? deserialize(stored)
        : {};

      if (Object.keys(storedData).length > 0) {
        const newLocalState = paths.reduce((acc, path) => ((
          setPropByPath(acc, path, getPropByPath(storedData, path))
        )), reducerDefaults);

        localState = newLocalState;
      } else {
        localState = reducerDefaults;
      }
    }

    const newState = initialReducer(localState, action);
    if (JSON.stringify(localState) !== JSON.stringify(newState)) {
      const resultStorage = paths.reduce((acc, path) => {
        const keyName = path.split('.')[0];
        const fromKeyPath = path.split('.').slice(1).join('.');
        const currentProp = getPropByPath(newState, path);

        return { ...acc, [keyName]: setPropByPath({}, fromKeyPath, currentProp) };
      }, {});

      storage.setItem('saved', serialize(resultStorage));
    }

    return newState;
  };
};

export default createLocalStorageReducer;
