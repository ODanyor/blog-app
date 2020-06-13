import * as TYPE from "store/types";

const initialState = {
  authToken: null,
  credentials: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
