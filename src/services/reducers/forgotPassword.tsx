// объект созданного заказа

import {
  SEND_EMAIL,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILED,
} from "../actions/sendMailReducer";

import type { TActions } from "../actions/sendMailReducer";
export interface TSendMailState {
  isMailSuccess: boolean;
  mailLoader: boolean;
  mailStatus: string;
}

const sendMailState: TSendMailState = {
  isMailSuccess: false,
  mailLoader: false,
  mailStatus: "",
};

export const sendMailReducer = (
  state = sendMailState,
  action: TActions
): TSendMailState => {
  switch (action.type) {
    case SEND_EMAIL: {
      return {
        ...state,
        mailLoader: true,
      };
    }

    case SEND_EMAIL_SUCCESS: {
      return {
        ...state,
        mailLoader: false,
        isMailSuccess: true,
      };
    }

    case SEND_EMAIL_FAILED: {
      return {
        ...state,
        mailLoader: false,
        isMailSuccess: false,
        mailStatus: "Такой почты у нас нет.",
      };
    }
    default: {
      return state;
    }
  }
};
