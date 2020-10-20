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

      paths.forEach(() => {
        const storedPartsByPaths = paths.map((innerPath) => {
          console.log(innerPath);

          return getPropByPath(storedData, innerPath);
        });

        localState = { ...reducerDefaults, ...storedPartsByPaths };
      });
    }

    const newState = initialReducer(localState, action);

    if (localState !== newState) {
      // console.log('localstate: ', JSON.stringify(localState));
      // console.log('newstate: ', JSON.stringify(newState));

      const resultStorage = paths.reduce((acc, path) => {
        const keyName = path.split('.')[0];
        const fromKeyPath = path.split('.').slice(1).join('.'); // !!!
        const currentProp = getPropByPath(newState, path);

        // [keyName]: currentProp
        return { ...acc, [keyName]: setPropByPath({}, fromKeyPath, currentProp) };
      }, {});

      storage.setItem('saved', serialize(resultStorage));
    }

    return newState;
  };
};

export default createLocalStorageReducer;
