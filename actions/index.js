export const setValue = (attribute, value) => ({
  type: "SET_VALUE",
  attribute,
  value,
});

export const setTip = (value) => ({
  type: "SET_TIP",
  value,
});

export const resetCalculator = () => ({
  type: "RESET_CALCULATOR",
});
