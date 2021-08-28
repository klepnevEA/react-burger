// объект созданного заказа

import {
  SEND_REGISTER,
  SEND_REGISTER_SUCCESS,
  SEND_REGISTER_FAILED,
} from "../actions";

const registerState = {
  isRegisterSuccess: false,
  registerLoader: false,
  registerStatus: "",
  authToken: "",
  refreshToken: "",
  user: {},
};

export const registerReducer = (state = registerState, action: any) => {
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
