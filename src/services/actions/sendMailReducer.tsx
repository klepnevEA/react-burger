/* sendEmail */
export const SEND_EMAIL: "SEND_EMAIL" = "SEND_EMAIL";
export const SEND_EMAIL_SUCCESS: "SEND_EMAIL_SUCCESS" = "SEND_EMAIL_SUCCESS";
export const SEND_EMAIL_FAILED: "SEND_EMAIL_FAILED" = "SEND_EMAIL_FAILED";

export interface ISentMail {
  readonly type: typeof SEND_EMAIL;
}

export interface ISentMailSuccess {
  readonly type: typeof SEND_EMAIL_SUCCESS;
}

export interface ISentMailFailed {
  readonly type: typeof SEND_EMAIL_FAILED;
}

export type TActions = ISentMail | ISentMailSuccess | ISentMailFailed;
