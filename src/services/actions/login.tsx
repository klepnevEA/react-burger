/* rlogin */
export const LOGIN: "LOGIN" = "LOGIN";
export const LOGIN_SUCCESS: "LOGIN_SUCCESS" = "LOGIN_SUCCESS";
export const LOGIN_FAILED: "LOGIN_FAILED" = "LOGIN_FAILED";

export interface TUser {
  email: string;
  name: string;
}

export interface ILogin {
  readonly type: typeof LOGIN;
  loginLoader: boolean;
  isLoginSuccess: boolean;
  isLoggined: boolean;
  user: TUser;
  message: string;
}

export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS;
  payload: TUser;
  loginLoader: boolean;
  isLoginSuccess: boolean;
  isLoggined: boolean;
  user: TUser;
  message: string;
}

export interface ILoginFailed {
  readonly type: typeof LOGIN_FAILED;
  payload: TUser;
  registerMessage: string;
  isLoggined: boolean;
  loginLoader: boolean;
  isLoginSuccess: boolean;
}

export type TActions = ILogin | ILoginSuccess | ILoginFailed;
