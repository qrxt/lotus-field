const fieldToOptionMapping = {
  unique: (value) => `unique=${value}`,
};

const buildOption = (fields, field, value) => fieldToOptionMapping[field](value, fields);

export default (fields) => {
  const optionEntries = Object
    .entries(fields)
    .filter(([field, value]) => value && fieldToOptionMapping[field])
    .map(([field, value]) => buildOption(fields, field, value));

  return optionEntries.join('&');
};
