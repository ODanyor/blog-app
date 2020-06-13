import * as TYPE from "store/types";

const initialState = {
  error: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.SET_ERRORS: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case TYPE.CLEAN_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};
