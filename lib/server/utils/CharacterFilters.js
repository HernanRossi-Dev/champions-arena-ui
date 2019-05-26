exports.NestedFilters = {
  user: (value) => {
    return { user: value };
  },
  type: (value) => {
    return { 'basics.type': value };
  },
  class: (value) => {
    return { 'classProps.class': value };
  },
  ancestry: (value) => {
    return { 'ancestryProps.ancestry': value };
  },
  level_lte: (value) => {
    const parseValue = parseInt(value, 10);
    return { 'basics.level': { $lte: parseValue } };
  },
  level_gte: (value) => {
    const parseValue = parseInt(value, 10);
    return { 'basics.level': { $gte: parseValue } };
  },
};
