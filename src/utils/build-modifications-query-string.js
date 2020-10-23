const fieldToModifierMapping = {
  name: (value, { nameExact }) => (nameExact
    ? `!"${value}"`
    : `"${value}"`
  ),
  type: (value) => `t:"${value}"`,
  rarity: (value) => `r:"${value}"`,
  artist: (value) => `a:"${value}"`,
  unique: (value) => `unique:${value}`,
};

const buildModifier = (fields, field, value) => fieldToModifierMapping[field](value, fields);

export default (fields) => {
  const modifierEntries = Object
    .entries(fields)
    .filter(([field, value]) => value && fieldToModifierMapping[field])
    .map(([field, value]) => buildModifier(fields, field, value));

  return modifierEntries.join('+');
};
