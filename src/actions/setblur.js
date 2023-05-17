export const setblur = () => {
  return async (dispatch) => {
    await dispatch({ type: "SET_BLUR" });
  };
};
