import {
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_GET_MESSAGE,
} from "../actions/ws-reducer-auth";
import type { TActions } from "../actions/ws-reducer-auth";
import { PayloadAction } from "@reduxjs/toolkit";

interface TWsReduserState {
  wsConnected: Boolean;
  error: PayloadAction | null;
  orders: [];
  total: number | null;
  totalToday: number | null;
}

const initialState: TWsReduserState = {
  wsConnected: false,
  error: null,
  orders: [],
  total: null,
  totalToday: null,
};

export const wsReducerAuth = (
  state = initialState,
  action: TActions
): TWsReduserState => {
  switch (action.type) {
    case WS_AUTH_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };

    case WS_AUTH_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };

    case WS_AUTH_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_AUTH_GET_MESSAGE:
      return {
        ...state,
        orders: action.payload?.orders,
        total: action.payload?.total,
        totalToday: action.payload?.totalToday,
      };

    default:
      return state;
  }
};
