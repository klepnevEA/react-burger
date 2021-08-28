// объект созданного заказа

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions";

const loginState = {
  isLoginSuccess: false,
  loginLoader: false,
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
      };
    }

    case LOGIN_FAILED: {
      return {
        ...state,
        loginLoader: false,
        isLoginSuccess: false,
      };
    }
    default: {
      return state;
    }
  }
};
