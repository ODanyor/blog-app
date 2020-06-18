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
  dispatch({ type: TYPE.SET_REQUEST });
  await api
    .post("/api/user/sign_up", credentials)
    .then(({ data }) => {
      dispatch({
        type: TYPE.SET_POCKET,
        payload: { ...credentials, secret_code_token: data.secret_code_token },
      });
      dispatch({ type: TYPE.SET_REQUEST });
      if (data.token) {
        dispatch({
          type: TYPE.SET_POCKET,
          payload: null,
        });
        storeAuthToken(data.token);
        return history.push("/");
      }
      history.push("/verification");
    })
    .catch(({ response }) => {
      dispatch({ type: TYPE.SET_ERRORS, payload: response.data });
      dispatch({ type: TYPE.SET_REQUEST });
    });
};

export const getCredentials = () => async (dispatch) => {
  await api
    .get("/api/user/")
    .then(({ data }) =>
      dispatch({ type: TYPE.SET_CREDENTIALS, payload: data.data })
    )
    .catch(({ response }) =>
      dispatch({ type: TYPE.SET_ERRORS, payload: response.data })
    );
};
