import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "../actions/login";
import { loginReducer } from "./login";

const initialState = {
  user: {},
  message: "",
  isLoginSuccess: false,
  loginLoader: false,
  isLoggined: false,
};

describe("login reducer", () => {
  it("should handle LOGIN loader", () => {
    expect(
      loginReducer(initialState, {
        type: LOGIN,
        loginLoader: true,
        isLoginSuccess: false,
        isLoggined: false,
        user: { name: "Test", email: "test@test.ts" },
        message: "",
      })
    ).toEqual(
      expect.objectContaining({
        loginLoader: true,
        isLoginSuccess: false,
        isLoggined: false,
        user: {},
        message: "",
      })
    );
  });

  it("should handle LOGIN_SUCCESS", () => {
    expect(
      loginReducer(initialState, {
        type: LOGIN_SUCCESS,
        payload: { name: "Test", email: "test@test.ts" },
        loginLoader: false,
        isLoginSuccess: true,
        isLoggined: true,
        user: { name: "Test", email: "test@test.ts" },
        message: "",
      })
    ).toEqual(
      expect.objectContaining({
        isLoggined: true,
        isLoginSuccess: true,
        loginLoader: false,
        user: { name: "Test", email: "test@test.ts" },
      })
    );
  });

  it("sshould handle LOGIN_FAILED", () => {
    expect(
      loginReducer(initialState, {
        type: LOGIN_FAILED,
        payload: { name: "Test", email: "test@test.ts" },
        registerMessage: "Привет",
        isLoggined: false,
        loginLoader: false,
        isLoginSuccess: false,
      })
    ).toEqual(
      expect.objectContaining({
        user: { name: "Test", email: "test@test.ts" },
        message: "Привет",
        isLoggined: false,
        loginLoader: false,
        isLoginSuccess: false,
      })
    );
  });
});
