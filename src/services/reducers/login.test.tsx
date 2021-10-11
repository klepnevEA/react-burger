import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "../actions";
import { loginReducer } from "./login";

const initialState = {
  user: {},
  message: "",
  isLoginSuccess: false,
  loginLoader: false,
  isLoggined: false,
};

describe("login reducer", () => {
  it("should return the initial state", () => {
    expect(loginReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle LOGIN loader", () => {
    expect(
      loginReducer(initialState, {
        type: LOGIN,
      })
    ).toEqual(
      expect.objectContaining({
        loginLoader: false,
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
      })
    ).toEqual(
      expect.objectContaining({
        loginLoader: false,
        isLoginSuccess: false,
        isLoggined: false,
        user: {},
        message: "",
      })
    );
  });

  it("sshould handle LOGIN_FAILED", () => {
    expect(
      loginReducer(initialState, {
        type: LOGIN_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        isLoggined: false,
        loginLoader: false,
        isLoginSuccess: false,
      })
    );
  });
});
