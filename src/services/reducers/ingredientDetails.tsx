import {
  INGREDIENT_DATAILS_CLOSE,
  INGREDIENT_DATAILS_OPEN,
} from "../actions/ingredientDetails";

import type { TActions } from "../actions/ingredientDetails";

// объект текущего просматриваемого ингредиента

interface TIngredientDetailsState {
  isOpenIngredientsDetals: boolean;
  ingredient: {};
}

const ingredientDetailsState: TIngredientDetailsState = {
  isOpenIngredientsDetals: false,
  ingredient: {},
};

export const ingredientDetailsReducer = (
  state = ingredientDetailsState,
  action: TActions
) => {
  switch (action.type) {
    case INGREDIENT_DATAILS_OPEN: {
      return {
        ...state,
        ingredient: action.ingredient,
        isOpenIngredientsDetals: true,
      };
    }
    case INGREDIENT_DATAILS_CLOSE: {
      return {
        ...state,
        ingredient: null,
        isOpenIngredientsDetals: false,
      };
    }
    default: {
      return state;
    }
  }
};
