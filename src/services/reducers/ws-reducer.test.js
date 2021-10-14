import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
} from "../actions/ws-reducer";
import { wsReducer } from "./ws-reducer";

const initialState = {
  wsConnected: false,
  error: null,
  orders: [],
  total: null,
  totalToday: null,
};
describe("register", () => {
  it("should handle WS_CONNECTION_SUCCESS", () => {
    expect(
      wsReducer(initialState, {
        type: WS_CONNECTION_SUCCESS,
        wsConnected: true,
      })
    ).toEqual(
      expect.objectContaining({
        wsConnected: true,
      })
    );
  });
  it("should handle WS_CONNECTION_ERROR", () => {
    expect(
      wsReducer(initialState, {
        type: WS_CONNECTION_ERROR,
        error: "Error",
        wsConnected: false,
      })
    ).toEqual(
      expect.objectContaining({
        wsConnected: false,
        error: undefined,
        orders: [],
        total: null,
        totalToday: null,
      })
    );
  });
  it("should handle WS_CONNECTION_CLOSED", () => {
    expect(
      wsReducer(initialState, {
        type: WS_CONNECTION_CLOSED,
        wsConnected: false,
      })
    ).toEqual(
      expect.objectContaining({
        wsConnected: false,
      })
    );
  });
});
