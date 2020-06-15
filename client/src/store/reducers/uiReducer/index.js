import * as TYPE from "store/types";

const initialState = {
  error: null,
  isRequested: false,
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
    case TYPE.SET_REQUEST: {
      return {
        ...state,
        isRequested: !state.isRequested,
      };
    }
    default:
      return state;
  }
};
