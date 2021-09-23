import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { rootReducer } from "./reducers";
export const WS_URL = "wss:/norma.nomoreparties.space/orders/all";

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(WS_URL))
);

export const store = createStore(rootReducer, enhancer);
