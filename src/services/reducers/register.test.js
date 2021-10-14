import {
  SEND_REGISTER_FAILED,
  SEND_REGISTER_SUCCESS,
} from "../actions/register";
import { registerReducer } from "./register";

const registerState = {
  isRegisterSuccess: false,
  registerLoader: false,
  registerStatus: "",
  authToken: "",
  refreshToken: "",
  user: {},
};

describe("register", () => {
  it("should handle SEND_REGISTER_SUCCESS", () => {
    expect(
      registerReducer(registerState, {
        type: SEND_REGISTER_SUCCESS,
        registerLoader: false,
        isRegisterSuccess: true,
        authToken: "123",
        refreshToken: "123",
        user: { name: "Test", email: "test@test.ts", password: "123456" },
      })
    ).toEqual(
      expect.objectContaining({
        registerLoader: false,
        isRegisterSuccess: true,
        authToken: "123",
        refreshToken: "123",
        user: { name: "Test", email: "test@test.ts", password: "123456" },
      })
    );
  });

  it("should handle SEND_REGISTER_FAILED", () => {
    expect(
      registerReducer(registerState, {
        type: SEND_REGISTER_FAILED,
        registerLoader: false,
        isRegisterSuccess: false,
        registerStatus: "Зарегестрироваться не получилось",
      })
    ).toEqual(
      expect.objectContaining({
        registerLoader: false,
        isRegisterSuccess: false,
        registerStatus: "Зарегестрироваться не получилось",
      })
    );
  });
});
