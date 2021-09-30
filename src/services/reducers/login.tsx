// объект созданного заказа

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/login";

import type { TActions } from "../actions/login";

interface TInitialState {
  isLoginSuccess: boolean;
  loginLoader: boolean;
  isLoggined: boolean;
  message: string;
  user: {};
}

const loginState: TInitialState = {
  isLoginSuccess: false,
  loginLoader: false,
  isLoggined: false,
  message: "",
  user: {},
};

export const loginReducer = (state = loginState, action: TActions) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        loginLoader: true,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginLoader: false,
        isLoginSuccess: true,
        isLoggined: true,
        user: action.payload,
      };
    }

    case LOGIN_FAILED: {
      return {
        ...state,
        loginLoader: false,
        isLoginSuccess: false,
        message: action.registerMessage,
        user: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
