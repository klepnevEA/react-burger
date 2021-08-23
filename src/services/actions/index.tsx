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
