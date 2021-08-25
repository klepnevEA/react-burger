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

export function sendRegisterRequest(data: {
  email: string;
  password: string;
  name: string;
}) {
  return function (dispatch: any) {
    dispatch({
      type: SEND_REGISTER,
    });
    fetch("https://norma.nomoreparties.space/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        name: data.name,
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
            type: SEND_REGISTER_SUCCESS,
          });
        } else {
          dispatch({
            type: SEND_REGISTER_FAILED,
            registerName: "Регистрация не прошла",
          });
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.code,
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
