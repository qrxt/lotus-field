const mergeData = (reducerDefaults, storedData) => ({
  ...reducerDefaults,
  ...storedData,
});

const createLocalStorageReducer = (
  initialReducer,
  key,
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
      const stored = storage.getItem(key);

      console.log(storage);

      const storedData = typeof stored === 'string'
        ? deserialize(stored)
        : {};

      localState = merge(reducerDefaults, storedData);
    }

    const newState = initialReducer(localState, action);

    console.log(key, newState);

    if (localState !== newState) {
      storage.setItem(key, serialize({ [key]: newState[key] }));
    }

    return newState;
  };
};

export default createLocalStorageReducer;
