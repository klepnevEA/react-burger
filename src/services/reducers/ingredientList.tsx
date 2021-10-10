import {
  GET_FEED,
  GET_FEED_FAILED,
  GET_FEED_SUCCESS,
  INGREDIENT_LIST_COUNT_BUN,
  INGREDIENT_LIST_COUNT_INGREDIENTS,
  INGREDIENT_LIST_COUNT_CLEAR,
  INGREDIENT_LIST_COUNT_INGREDIENTS_DECREASE,
  TIngredient,
} from "../actions/ingredientList";

import type { TActions } from "../actions/ingredientList";

interface TInitialState {
  feedRequest: boolean;
  feedFailed: boolean;
  ingredients: [];
}

const initialState: TInitialState = {
  feedRequest: false,
  feedFailed: false,
  ingredients: [],
};

export const ingredientReducer = (state = initialState, action: TActions) => {
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
          state.ingredients.map((item: TIngredient) =>
            item._id === action.ellementId.ingredientId && item.type === "bun"
              ? (item.__v = 2)
              : item.type === "bun"
              ? (item.__v = 0)
              : item.__v
          ),
        ],
      };
    }
    case INGREDIENT_LIST_COUNT_INGREDIENTS: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          state.ingredients.map((item: TIngredient) =>
            item._id === action.ellementId.ingredientId ? item.__v++ : item.__v
          ),
        ],
      };
    }
    case INGREDIENT_LIST_COUNT_INGREDIENTS_DECREASE: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          state.ingredients.map((item: TIngredient) =>
            item._id === action.ellementId ? item.__v-- : item.__v
          ),
        ],
      };
    }
    case INGREDIENT_LIST_COUNT_CLEAR: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          state.ingredients.map((item: TIngredient) => (item.__v = 0)),
        ],
      };
    }
    default: {
      return state;
    }
  }
};
