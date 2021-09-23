import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
} from "../actions";

export const socketMiddleware = (wsUrl: string) => {
  return (store: any) => {
    let socket: any = null;

    return (next: any) => (action: any) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;

      if (type === WS_CONNECTION_START) {
        // объект класса WebSocket
        socket = new WebSocket(wsUrl);
        console.log(socket);
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = (event: any) => {
          console.log("onopen");
          dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = (event: any) => {
          console.log("onerror");
          dispatch({ type: WS_CONNECTION_ERROR, payload: event });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = (event: any) => {
          console.log("onmessage");
          const { data } = event;
          console.log(data);
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: WS_GET_MESSAGE, payload: restParsedData });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = (event: any) => {
          console.log("onclose");
          dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
        };

        if (type === WS_SEND_MESSAGE) {
          const message = payload;
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};
