const getPropByPath = (obj, path, defaultValue = null) => {
  const parts = path.split('.');

  const iter = (currentObjPart, counter) => {
    if (parts.length === counter) {
      return currentObjPart;
    }

    const currentPart = parts[counter];
    const retrievedObjPart = currentObjPart[currentPart];

    return retrievedObjPart
      ? iter(retrievedObjPart, counter + 1)
      : defaultValue;
  };

  return iter(obj, 0);
};

export default getPropByPath;
