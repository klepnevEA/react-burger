import {
  GET_FEED,
  GET_FEED_FAILED,
  GET_FEED_SUCCESS,
  INGREDIENT_LIST_COUNT_BUN,
  INGREDIENT_LIST_COUNT_INGREDIENTS,
  INGREDIENT_LIST_COUNT_CLEAR,
} from "../actions";

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
    case INGREDIENT_LIST_COUNT_BUN: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          state.ingredients.map((item) =>
            item._id === action.ellementId.ingredientId
              ? (item.__v = 2)
              : (item.__v = 0)
          ),
        ],
      };
    }
    case INGREDIENT_LIST_COUNT_INGREDIENTS: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          state.ingredients.map((item) =>
            item._id === action.ellementId.ingredientId ? item.__v++ : item.__v
          ),
        ],
      };
    }
    case INGREDIENT_LIST_COUNT_CLEAR: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          state.ingredients.map((item) => (item.__v = 0)),
        ],
      };
    }
    default: {
      return state;
    }
  }
};
