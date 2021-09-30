// сброс пароля

import {
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
} from "../actions/resetPassword";
import type { TActions } from "../actions/resetPassword";
interface TResetState {
  isResetSuccess: boolean;
  resetLoader: boolean;
  resetStatus: string;
}

const resetState: TResetState = {
  isResetSuccess: false,
  resetLoader: false,
  resetStatus: "",
};

export const resetPassword = (state = resetState, action: TActions) => {
  switch (action.type) {
    case RESET_PASSWORD: {
      return {
        ...state,
        resetLoader: true,
      };
    }

    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetLoader: false,
        isResetSuccess: true,
      };
    }

    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetLoader: false,
        isResetSuccess: false,
        resetStatus: "Зарегестрироваться не получилось",
      };
    }
    default: {
      return state;
    }
  }
};
