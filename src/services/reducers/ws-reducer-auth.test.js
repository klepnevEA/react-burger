import {
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_SUCCESS,
} from "../actions/ws-reducer-auth";
import { wsReducerAuth } from "./ws-reducer-auth";

const initialState = {
  wsConnected: false,
  error: null,
  orders: [],
  total: null,
  totalToday: null,
};
describe("register", () => {
  it("should handle WS_AUTH_CONNECTION_SUCCESS", () => {
    expect(
      wsReducerAuth(initialState, {
        type: WS_AUTH_CONNECTION_SUCCESS,
        wsConnected: true,
      })
    ).toEqual(
      expect.objectContaining({
        wsConnected: true,
      })
    );
  });
  it("should handle WS_AUTH_CONNECTION_ERROR", () => {
    expect(
      wsReducerAuth(initialState, {
        type: WS_AUTH_CONNECTION_ERROR,
        error: "Ошибка",
        wsConnected: false,
      })
    ).toEqual(
      expect.objectContaining({
        wsConnected: false,
        error: "Ошибка",
        orders: [],
        total: null,
        totalToday: null,
      })
    );
  });
  it("should handle WS_AUTH_CONNECTION_CLOSED", () => {
    expect(
      wsReducerAuth(initialState, {
        type: WS_AUTH_CONNECTION_CLOSED,
        wsConnected: false,
      })
    ).toEqual(
      expect.objectContaining({
        wsConnected: false,
      })
    );
  });
});
