// список всех ингредиентов в текущем конструкторе бургера

import {
  INGREDIENT_CONSTRUCTOR_ADD,
  INGREDIENT_CONSTRUCTOR_ADD__BUN,
  INGREDIENT_CONSTRUCTOR_CLEAR,
} from "../actions";

const ingredientConstructorBurgerReducerState = {
  ingredientsConstructor: [],
  ingredientsConstructorBun: {},
  totalPriceBun: 0,
  totalPriceIngredients: 0,
};

export const ingredientConstructorBurgerReducer = (
  state = ingredientConstructorBurgerReducerState,
  action: any
) => {
  switch (action.type) {
    case INGREDIENT_CONSTRUCTOR_ADD: {
      return {
        ...state,
        ingredientsConstructor: [
          ...state.ingredientsConstructor,
          action.ellement[0],
        ],
        totalPriceIngredients:
          state.totalPriceIngredients + action.ellement[0].price,
      };
    }
    case INGREDIENT_CONSTRUCTOR_ADD__BUN: {
      return {
        ...state,
        ingredientsConstructorBun: action.ellement[0],
        totalPriceBun: action.ellement[0].price * 2,
      };
    }
    case INGREDIENT_CONSTRUCTOR_CLEAR: {
      return {
        ...state,
        ingredientsConstructorBun: [],
        ingredientsConstructor: [],
        totalPriceIngredients: 0,
        totalPriceBun: 0,
      };
    }
    default: {
      return state;
    }
  }
};
