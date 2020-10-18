export default (obj) => {
  const flippedEntries = Object.entries(obj)
    .map(([value, key]) => [key, value]);

  return Object.fromEntries(flippedEntries);
};
