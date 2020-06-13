import * as TYPE from "store/types";
import api from "shared/utils/api";

export const login = (credentials) => async (dispatch) => {
  await api
    .post("/api/user/sign_in", { credentials })
    .then((res) => console.log("Response: ", res.response.data))
    .catch((err) =>
      dispatch({ type: TYPE.SET_ERRORS, payload: err.response.data })
    );
};

export const register = (credentials) => (dispatch) => {};
