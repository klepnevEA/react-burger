/* socketMiddleware */
export const WS_AUTH_CONNECTION_START: "WS_AUTH_CONNECTION_START" =
  "WS_AUTH_CONNECTION_START";
export const WS_AUTH_CONNECTION_SUCCESS: "WS_AUTH_CONNECTION_SUCCESS" =
  "WS_AUTH_CONNECTION_SUCCESS";
export const WS_AUTH_CONNECTION_ERROR: "WS_AUTH_CONNECTION_ERROR" =
  "WS_AUTH_CONNECTION_ERROR";
export const WS_AUTH_CONNECTION_CLOSED: "WS_AUTH_CONNECTION_CLOSED" =
  "WS_AUTH_CONNECTION_CLOSED";
export const WS_AUTH_GET_MESSAGE: "WS_AUTH_GET_MESSAGE" = "WS_AUTH_GET_MESSAGE";
export const WS_AUTH_SEND_MESSAGE: "WS_AUTH_SEND_MESSAGE" =
  "WS_AUTH_SEND_MESSAGE";

export interface IWSAuth {
  readonly type: typeof WS_AUTH_CONNECTION_START;
}

export interface IWSAuthSuccess {
  readonly type: typeof WS_AUTH_CONNECTION_SUCCESS;
}

export interface IWSAuthError {
  readonly type: typeof WS_AUTH_CONNECTION_ERROR;
  readonly payload: { payload: void; type: string };
}

export interface IWSAuthClosed {
  readonly type: typeof WS_AUTH_CONNECTION_CLOSED;
}

export interface IWSAuthGetMessage {
  readonly type: typeof WS_AUTH_GET_MESSAGE;
  readonly payload: {
    orders: [];
    total: number;
    totalToday: number;
  };
}

export interface IWSAuthSendMessage {
  readonly type: typeof WS_AUTH_SEND_MESSAGE;
}

export type TActions =
  | IWSAuth
  | IWSAuthSuccess
  | IWSAuthError
  | IWSAuthClosed
  | IWSAuthGetMessage
  | IWSAuthSendMessage;
