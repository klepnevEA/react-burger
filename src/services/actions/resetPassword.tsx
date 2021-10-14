/* register */
export const RESET_PASSWORD: "RESET_PASSWORD" = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS" =
  "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED: "RESET_PASSWORD_FAILED" =
  "RESET_PASSWORD_FAILED";

export interface TUser {
  email: string;
  name: string;
}

export interface IResetPassowd {
  readonly type: typeof RESET_PASSWORD;
  readonly resetLoader: boolean;
}

export interface IResetPassowdSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
  readonly resetLoader: boolean;
  readonly isResetSuccess: boolean;
}

export interface IResetPassowdFailed {
  readonly type: typeof RESET_PASSWORD_FAILED;
  readonly resetLoader: boolean;
  readonly isResetSuccess: boolean;
  readonly resetStatus: string;
}

export type TActions =
  | IResetPassowd
  | IResetPassowdSuccess
  | IResetPassowdFailed;
