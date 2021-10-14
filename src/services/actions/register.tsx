/* register */
export const SEND_REGISTER: "SEND_REGISTER" = "SEND_REGISTER";
export const SEND_REGISTER_SUCCESS: "SEND_REGISTER_SUCCESS" =
  "SEND_REGISTER_SUCCESS";
export const SEND_REGISTER_FAILED: "SEND_REGISTER_FAILED" =
  "SEND_REGISTER_FAILED";

export interface TUser {
  email: string;
  name: string;
  password: string;
}

export interface ISendRegister {
  readonly type: typeof SEND_REGISTER;
}

export interface ISendRegisterSuccess {
  readonly type: typeof SEND_REGISTER_SUCCESS;
  readonly authToken: string;
  readonly refreshToken: string;
  readonly user: TUser;
  readonly registerLoader: boolean;
  readonly isRegisterSuccess: boolean;
}

export interface ISendRegisterFailed {
  readonly type: typeof SEND_REGISTER_FAILED;
  readonly registerLoader: boolean;
  readonly isRegisterSuccess: boolean;
  readonly registerStatus: string;
}

export type TActions =
  | ISendRegister
  | ISendRegisterSuccess
  | ISendRegisterFailed;
