import {
  SEND_EMAIL,
  SEND_EMAIL_FAILED,
  SEND_EMAIL_SUCCESS,
} from "../actions/sendMailReducer";
import { sendMailReducer } from "./forgotPassword";

const sendMailState = {
  isMailSuccess: false,
  mailLoader: false,
  mailStatus: "",
};
describe("Action creators", () => {
  it("should return the initial state", () => {
    expect(sendMailReducer(undefined, {})).toEqual(sendMailState);
  });
  it("should handle SEND_EMAIL", () => {
    expect(
      sendMailReducer(sendMailState, {
        type: SEND_EMAIL,
      })
    ).toEqual(
      expect.objectContaining({
        mailLoader: true,
      })
    );
  });
  it("should handle SEND_EMAIL_SUCCESS", () => {
    expect(
      sendMailReducer(sendMailState, {
        type: SEND_EMAIL_SUCCESS,
      })
    ).toEqual(
      expect.objectContaining({
        mailLoader: false,
        isMailSuccess: true,
      })
    );
  });
  it("should handle SEND_EMAIL_FAILED", () => {
    expect(
      sendMailReducer(sendMailState, {
        type: SEND_EMAIL_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        mailLoader: false,
        isMailSuccess: false,
        mailStatus: "Такой почты у нас нет.",
      })
    );
  });
});
