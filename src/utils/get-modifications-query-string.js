const isAny = (rarity) => rarity === 'any';

const fieldToModifierMapping = {
  name: (value) => `"${value}"`,
  type: (value) => `t:"${value}"`,
  rarity: (value) => (isAny(value) ? '' : `r:"${value}"`),
  artist: (value) => `a:"${value}"`,
};

const buildModifier = (field, value) => fieldToModifierMapping[field](value);

export default (fields) => {
  const modifierEntries = Object
    .entries(fields)
    .filter(([, value]) => value)
    .map(([field, value]) => buildModifier(field, value));

  return modifierEntries.join('+');
};
