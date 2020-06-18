import * as TYPE from "store/types";

const initialState = {
  pocket: null,
  credentials: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.SET_POCKET: {
      return {
        ...state,
        pocket: action.payload,
      };
    }
    case TYPE.SET_CREDENTIALS: {
      return {
        ...state,
        credentials: action.payload,
      };
    }
    default:
      return state;
  }
};
