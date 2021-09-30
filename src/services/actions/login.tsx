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
}

export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS;
  readonly payload: TUser;
}

export interface ILoginFailed {
  readonly type: typeof LOGIN_FAILED;
  readonly payload: TUser;
  readonly registerMessage: string;
}

export type TActions = ILogin | ILoginSuccess | ILoginFailed;
