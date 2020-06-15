import * as TYPE from "store/types";
import history from "browserHistory";
import api from "shared/utils/api";
import { storeAuthToken, removeStoredAuthToken } from "shared/utils/authToken";

export const login = (credentials) => async (dispatch) => {
  dispatch({ type: TYPE.SET_REQUEST });
  await api
    .post("/api/user/sign_in", { credentials })
    .then(({ data }) => {
      dispatch({ type: TYPE.SET_REQUEST });
      storeAuthToken(data.token);
      history.push("/");
    })
    .catch(({ response }) => {
      dispatch({ type: TYPE.SET_ERRORS, payload: response.data });
      dispatch({ type: TYPE.SET_REQUEST });
    });
};

export const register = (credentials) => async (dispatch) => {
  await api
    .post("/api/user/sign_up", { credentials })
    .then(({ data }) => console.log("Token: ", data))
    .catch(({ response }) =>
      dispatch({ type: TYPE.SET_ERRORS, payload: response.data })
    );
};
