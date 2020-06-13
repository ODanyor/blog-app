import { createStore, combineReducers, applyMiddleware } from "redux";

const initialState = {};

// Middleware
import thunk from "redux-thunk";
import logger from "redux-logger";

// Reducers
import { uiReducer, userReducer, postReducer } from "./reducers";

const middleware = [thunk, logger];

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
  post: postReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

export const store = createStore(rootReducer, initialState, enhancer);
