import * as TYPE from "store/types";

export const cleanErrors = () => async (dispatch) => {
  await dispatch({ type: TYPE.CLEAN_ERRORS });
};
