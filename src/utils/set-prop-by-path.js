import getPropByPath from './get-prop-by-path';

const setPropByPath = (obj, path, value) => {
  const iter = (currentPath, resultObj) => {
    const currentParts = currentPath.split('.');
    const currentPathPart = currentParts[currentParts.length - 1];
    const nextPath = currentParts
      .slice(0, currentParts.length - 1)
      .join('.');
    const wrappingPart = getPropByPath(obj, nextPath);
    const nextResult = {
      ...wrappingPart,
      [currentPathPart]: resultObj,
    };

    if (!currentPath.includes('.')) {
      return nextResult;
    }

    return iter(nextPath, nextResult);
  };

  return iter(path, value);
};

export default setPropByPath;
