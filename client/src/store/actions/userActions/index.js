import * as TYPE from "store/types";
import api from "shared/utils/api";
import { storeAuthToken, removeStoredAuthToken } from "shared/utils/authToken";

export const login = (credentials) => async (dispatch) => {
  await api
    .post("/api/user/sign_in", { credentials })
    .then(({ data }) => storeAuthToken(data.token))
    .catch(({ response }) =>
      dispatch({ type: TYPE.SET_ERRORS, payload: response.data })
    );
};

export const register = (credentials) => async (dispatch) => {
  await api
    .post("/api/user/sign_up", { credentials })
    .then(({ data }) => console.log("Token: ", data))
    .catch(({ response }) =>
      dispatch({ type: TYPE.SET_ERRORS, payload: response.data })
    );
};
