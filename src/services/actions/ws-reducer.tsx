/* socketMiddleware */
export const WS_CONNECTION_START: "WS_CONNECTION_START" = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS" =
  "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR" = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED" =
  "WS_CONNECTION_CLOSED";
export const WS_GET_MESSAGE: "WS_GET_MESSAGE" = "WS_GET_MESSAGE";
export const WS_SEND_MESSAGE: "WS_SEND_MESSAGE" = "WS_SEND_MESSAGE";

export interface IWS {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWSSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWSError {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: { payload: void; type: string };
}

export interface IWSClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWSGetMessage {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: {
    orders: [];
    total: number;
    totalToday: number;
  };
}

export interface IWSSendMessage {
  readonly type: typeof WS_SEND_MESSAGE;
}

export type TActions =
  | IWS
  | IWSSuccess
  | IWSError
  | IWSClosed
  | IWSGetMessage
  | IWSSendMessage;
