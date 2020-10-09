const toCamelCase = (anyCase) => (
  anyCase.replace(/([-_][a-z])/ig, ($1) => (
    $1.toUpperCase().replace('_', '')
  ))
);

const transform = (data) => {
  const entries = Object.entries(data);

  const transformedEntries = entries
    .map(([key, value]) => {
      const current = data[key];
      const camelCaseKey = toCamelCase(key);

      if (current && current.constructor === Object) {
        return [camelCaseKey, transform(current)];
      }

      if (current && current instanceof Array) {
        return [camelCaseKey, current.map(transform)];
      }

      return [camelCaseKey, value];
    });

  return Object.fromEntries(transformedEntries);
};

export default transform;
