import { GET_FEED, GET_FEED_FAILED, GET_FEED_SUCCESS } from "../actions";

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
        console.log(data.data);
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

const initialState = {
  feedRequest: false,
  feedFailed: false,
  ingredients: [],
};

export const ingredientReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_FEED: {
      return {
        ...state,
        feedRequest: true,
        feedFailed: false,
      };
    }
    case GET_FEED_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        feedRequest: false,
      };
    }
    case GET_FEED_FAILED: {
      return {
        ...state,
        feedFailed: true,
        feedRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
