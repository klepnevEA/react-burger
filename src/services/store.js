import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { socketMiddlewareAuth } from "./middleware/socketMiddlewareAuth";
import { rootReducer } from "./reducers";
export const WS_URL = "wss:/norma.nomoreparties.space/orders/all";
export const WS_URL_AUTH = "wss://norma.nomoreparties.space/orders";

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(WS_URL, false),
    socketMiddlewareAuth(WS_URL_AUTH, true)
  )
);

export const store = createStore(rootReducer, enhancer);
