import {
  WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_GET_MESSAGE,
  WS_AUTH_SEND_MESSAGE,
  getCookie,
} from "../actions";

export const socketMiddlewareAuth = (wsUrl: string, auth: boolean) => {
  return (store: any) => {
    let socket: any = null;

    return (next: any) => (action: any) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const token = getCookie("token");

      if (type === WS_AUTH_CONNECTION_START) {
        // объект класса WebSocket
        socket = new WebSocket(`${wsUrl}?token=${token}`);
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = (event: any) => {
          dispatch({ type: WS_AUTH_CONNECTION_SUCCESS, payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = (event: any) => {
          dispatch({ type: WS_AUTH_CONNECTION_ERROR, payload: event });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = (event: any) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: WS_AUTH_GET_MESSAGE, payload: restParsedData });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = (event: any) => {
          dispatch({ type: WS_AUTH_CONNECTION_CLOSED, payload: event });
        };

        if (type === WS_AUTH_SEND_MESSAGE) {
          const message = payload;
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};
