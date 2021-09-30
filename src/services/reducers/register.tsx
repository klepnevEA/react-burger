// объект созданного заказа

import {
  SEND_REGISTER,
  SEND_REGISTER_SUCCESS,
  SEND_REGISTER_FAILED,
} from "../actions/register";

import type { TActions } from "../actions/register";

interface TRegisterState {
  isRegisterSuccess: boolean;
  registerLoader: boolean;
  registerStatus: string;
  authToken: string;
  refreshToken: string;
  user: {};
}

const registerState: TRegisterState = {
  isRegisterSuccess: false,
  registerLoader: false,
  registerStatus: "",
  authToken: "",
  refreshToken: "",
  user: {},
};

export const registerReducer = (state = registerState, action: TActions) => {
  switch (action.type) {
    case SEND_REGISTER: {
      return {
        ...state,
        registerLoader: true,
      };
    }

    case SEND_REGISTER_SUCCESS: {
      return {
        ...state,
        registerLoader: false,
        isRegisterSuccess: true,
        authToken: action.authToken,
        refreshToken: action.refreshToken,
        user: action.user,
      };
    }

    case SEND_REGISTER_FAILED: {
      return {
        ...state,
        registerLoader: false,
        isRegisterSuccess: false,
        registerStatus: "Зарегестрироваться не получилось",
      };
    }
    default: {
      return state;
    }
  }
};
