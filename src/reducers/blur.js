export const blur = (state = false, action) => {
  switch (action.type) {
    case "SET_BLUR":
      return !state;
    default:
      return state;
  }
};
