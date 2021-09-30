import {
  GET_FEED,
  GET_FEED_FAILED,
  GET_FEED_SUCCESS,
  INGREDIENT_LIST_COUNT_CLEAR,
} from "../actions/ingredientList";

import { INGREDIENT_CONSTRUCTOR_CLEAR } from "../actions/ingredientBurger";

import {
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
} from "../actions/resetPassword";

import {
  SEND_REGISTER,
  SEND_REGISTER_SUCCESS,
  SEND_REGISTER_FAILED,
} from "../actions/register";

import {
  SEND_EMAIL,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILED,
} from "../actions/sendMailReducer";

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/login";

import {
  SET_ORDER,
  SET_ORDER_FAILED,
  SET_ORDER_SUCCESS,
} from "../actions/orderDetails";

export let authUser = {};

export const getCookie = (name: string) => {
  const token = localStorage.getItem("authToken") || "";
  const matches = token.match(
    new RegExp(
      // eslint-disable-next-line
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export function getIngredients() {
  return function (dispatch: any) {
    dispatch({
      type: GET_FEED,
    });
    // Запрашиваем данные у сервера
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data.success) {
          dispatch({
            type: GET_FEED_SUCCESS,
            ingredients: data.data,
          });
        } else {
          dispatch({
            type: GET_FEED_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_FEED_FAILED,
        });
      });
  };
}

export function setOrder(data: {}) {
  return function (dispatch: any) {
    dispatch({
      type: SET_ORDER,
    });
    fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      body: JSON.stringify({
        ingredients: data,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data.success) {
          dispatch({
            type: SET_ORDER_SUCCESS,
            numberOrder: data.order.number,
            orderName: data.name,
          });
          dispatch({
            type: INGREDIENT_CONSTRUCTOR_CLEAR,
          });
          dispatch({
            type: INGREDIENT_LIST_COUNT_CLEAR,
          });
        } else {
          dispatch({
            type: SET_ORDER_FAILED,
            orderName: "Офонмить заказ не получилось",
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: SET_ORDER_FAILED,
          orderName: "Офонмить заказ не получилось",
        });
      });
  };
}

export function sendEmailRequest(data: {}) {
  return function (dispatch: any) {
    dispatch({
      type: SEND_EMAIL,
    });
    fetch("https://norma.nomoreparties.space/api/password-reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data.success) {
          dispatch({
            type: SEND_EMAIL_SUCCESS,
          });
        } else {
          dispatch({
            type: SEND_EMAIL_FAILED,
            orderName: "Отправить емайл не получилось",
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: SEND_EMAIL_FAILED,
          orderName: "Отправить емайл не получилось",
        });
      });
  };
}

/*сохраним этот токен в куку*/
export function setCookie(name: any, value: any, props: any) {
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1200);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
  localStorage.setItem("authToken", updatedCookie);
}

export function sendRegisterRequest(data: {
  email: string;
  password: string;
  name: string;
}) {
  let authToken: any;
  let refreshToken: any;

  return function (dispatch: any) {
    dispatch({
      type: SEND_REGISTER,
    });
    fetch("https://norma.nomoreparties.space/api/auth/register", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken.indexOf("Bearer") === 0) {
          authToken = data.accessToken.split("Bearer ")[1];
        }
        if (authToken) {
          // Сохраняем токен в куку token
          setCookie("token", authToken, { expires: 1 });
          dispatch({
            type: SEND_REGISTER_SUCCESS,
            user: data.user,
          });
        } else {
          dispatch({
            type: SEND_REGISTER_FAILED,
            registerMessage: "Регистрация не прошла",
          });
        }
        if (data.refreshToken) {
          refreshToken = data.refreshToken;
          localStorage.setItem("refreshToken", refreshToken);
        }
      })
      .catch((err) => {
        dispatch({
          type: SEND_REGISTER_FAILED,
          registerMessage: err,
        });
      });
  };
}

/*reset password */

export function resetPasswordRequest(data: { code: string; password: string }) {
  return function (dispatch: any) {
    dispatch({
      type: RESET_PASSWORD,
    });
    fetch("https://norma.nomoreparties.space/api/password-reset/reset", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        token: data.code,
        password: data.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data.success) {
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
          });
        } else {
          dispatch({
            type: RESET_PASSWORD_FAILED,
            registerMessage: "Регистрация не прошла",
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: RESET_PASSWORD_FAILED,
          registerMessage: err,
        });
      });
  };
}

/*login */

export function loginRequest(data: { email: string; password: string }) {
  let authToken: any;
  let refreshToken: any;
  return function (dispatch: any) {
    dispatch({
      type: LOGIN,
    });
    fetch("https://norma.nomoreparties.space/api/auth/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          tokenRefrech(data.refreshToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          if (data.accessToken.indexOf("Bearer") === 0) {
            authToken = data.accessToken.split("Bearer ")[1];
          }
          if (authToken) {
            setCookie("token", authToken, { expires: 1 });
          }
          if (data.refreshToken) {
            refreshToken = data.refreshToken;
            localStorage.setItem("refreshToken", refreshToken);
          }
          dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user,
          });
        } else {
          dispatch({
            type: LOGIN_FAILED,
            registerMessage:
              "Такого пользователя у нас нет или пароль не верный",
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILED,
          registerMessage: err,
        });
      });
  };
}

/*logout */

export function logoutRequest() {
  return function (dispatch: any) {
    dispatch({
      type: LOGIN,
    });
    fetch("https://norma.nomoreparties.space/api/auth/logout", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (
          localStorage.getItem("refreshToken") &&
          localStorage.getItem("authToken")
        ) {
          if (data.success) {
            localStorage.setItem("refreshToken", "");
            localStorage.setItem("authToken", "");
            dispatch({
              type: LOGIN_FAILED,
              payload: {},
              registerName: "Разлогинился",
            });
          }
        }
      });
  };
}

/*tokenRefrech */

export function tokenRefrech(token: string) {
  return function () {
    fetch("https://norma.nomoreparties.space/api/auth/token", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(token),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        localStorage.setItem("refreshToken", data.refreshToken);
      });
  };
}

/* обновление данных о пользователе */

export function sendUpdateUserRequest(data: {
  email: string;
  password: string;
  name: string;
}) {
  return function (dispatch: any) {
    fetch("https://norma.nomoreparties.space/api/auth/user", {
      method: "PATCH",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  };
}

/* авторизация */

export function getAuthUser() {
  return fetch("https://norma.nomoreparties.space/api/auth/user", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: ("Bearer " + getCookie("token")) as string,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      authUser = data;
      return data;
    });
}

export const getUserRequest = async () =>
  await fetch("https://norma.nomoreparties.space/api/auth/user", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: ("Bearer " + getCookie("token")) as string,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  })
    .then((res) => res.json())
    .then((data) => {
      return data.success;
    });
