import {
  RESET_PASSWORD,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS,
} from "../actions/resetPassword";
import { resetPassword } from "./resetPassword";

const resetState = {
  isResetSuccess: false,
  resetLoader: false,
  resetStatus: "",
};

describe("register", () => {
  it("should handle RESET_PASSWORD", () => {
    expect(
      resetPassword(resetState, {
        type: RESET_PASSWORD,
        resetLoader: true,
      })
    ).toEqual(
      expect.objectContaining({
        resetLoader: true,
      })
    );
  });

  it("should handle RESET_PASSWORD_SUCCESS", () => {
    expect(
      resetPassword(resetState, {
        type: RESET_PASSWORD_SUCCESS,
        resetLoader: false,
        isResetSuccess: true,
      })
    ).toEqual(
      expect.objectContaining({
        resetLoader: false,
        isResetSuccess: true,
      })
    );
  });

  it("should handle RESET_PASSWORD_FAILED", () => {
    expect(
      resetPassword(resetState, {
        type: RESET_PASSWORD_FAILED,
        resetLoader: false,
        isResetSuccess: false,
        resetStatus: "Зарегестрироваться не получилось",
      })
    ).toEqual(
      expect.objectContaining({
        resetLoader: false,
        isResetSuccess: false,
        resetStatus: "Зарегестрироваться не получилось",
      })
    );
  });
});
