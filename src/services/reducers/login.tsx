// объект созданного заказа

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions";

const loginState = {
  isLoginSuccess: false,
  loginLoader: false,
  user: {},
};

export const loginReducer = (state = loginState, action: any) => {
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
        user: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
