export const GET_FEED = "GET_FEED";
export const GET_FEED_FAILED = "GET_FEED_FAILED";
export const GET_FEED_SUCCESS = "GET_FEED_SUCCESS";
export const INGREDIENT_LIST_COUNT_BUN = "INGREDIENT_LIST_COUNT_BUN";

export const SET_ORDER = "SET_ORDER";
export const SET_ORDER_SUCCESS = "SET_ORDER_SUCCESS";
export const SET_ORDER_FAILED = "SET_ORDER_FAILED";

export const INGREDIENT_LIST_COUNT_INGREDIENTS =
  "INGREDIENT_LIST_COUNT_INGREDIENTS";
export const INGREDIENT_LIST_COUNT_CLEAR = "INGREDIENT_LIST_COUNT_CLEAR";
export const INGREDIENT_LIST_COUNT_INGREDIENTS_DECREASE =
  "INGREDIENT_LIST_COUNT_INGREDIENTS_DECREASE";

export const INGREDIENT_DATAILS_OPEN = "INGREDIENT_DATAILS_OPEN";
export const INGREDIENT_DATAILS_CLOSE = "INGREDIENT_DATAILS_CLOSE";

export const ORDER_DATAILS_CLOSE = "ORDER_DATAILS_CLOSE";

export const INGREDIENT_CONSTRUCTOR_ADD = "INGREDIENT_CONSTRUCTOR_ADD";
export const INGREDIENT_CONSTRUCTOR_ADD_BUN = "INGREDIENT_CONSTRUCTOR_ADD_BUN";
export const INGREDIENT_CONSTRUCTOR_CLEAR = "INGREDIENT_CONSTRUCTOR_CLEAR";
export const INGREDIENT_CONSTRUCTOR_CUSTOM_ID =
  "INGREDIENT_CONSTRUCTOR_CUSTOM_ID";
export const INGREDIENT_CONSTRUCTOR_DELETE = "INGREDIENT_CONSTRUCTOR_DELETE";
export const REOTDER_INGREDIENTS = "REOTDER_INGREDIENTS";

/* sendEmail */
export const SEND_EMAIL = "SEND_EMAIL";
export const SEND_EMAIL_SUCCESS = "SEND_EMAIL_SUCCESS";
export const SEND_EMAIL_FAILED = "SEND_EMAIL_FAILED";

/* register */
export const SEND_REGISTER = "SEND_REGISTER";
export const SEND_REGISTER_SUCCESS = "SEND_REGISTER_SUCCESS";
export const SEND_REGISTER_FAILED = "SEND_REGISTER_FAILED";

/* register */
export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

/* rlogin */
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export let authUser = {};

export const getCookie = (name: string) => {
  const token = localStorage.getItem("authToken") || "";
  const matches = token.match(
    new RegExp(
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
            registerName: "Регистрация не прошла",
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
          registerName: err,
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
            registerName: "Регистрация не прошла",
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: RESET_PASSWORD_FAILED,
          registerName: err,
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
        if (data.success) {
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
          });
        } else {
          dispatch({
            type: LOGIN_FAILED,
            registerName: "Такого пользователя у нас нет",
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILED,
          registerName: err,
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
