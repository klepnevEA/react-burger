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
}

export interface IResetPassowdSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export interface IResetPassowdFailed {
  readonly type: typeof RESET_PASSWORD_FAILED;
}

export type TActions =
  | IResetPassowd
  | IResetPassowdSuccess
  | IResetPassowdFailed;
