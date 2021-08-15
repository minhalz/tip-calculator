export const getTip = ({ bill, tip, people }) => {
  return setDefault(((bill * tip) / 100 / parseInt(people)).toFixed(2));
};

export const getTotal = ({ bill, tip, people }) => {
  return setDefault(((bill * (1 + tip / 100)) / parseInt(people)).toFixed(2));
};

const setDefault = (number) => {
  return !isNaN(number) && isFinite(number) ? number : (0).toFixed(2);
};
