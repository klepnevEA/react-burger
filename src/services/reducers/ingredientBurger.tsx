// список всех ингредиентов в текущем конструкторе бургера

import {
  INGREDIENT_CONSTRUCTOR_ADD,
  INGREDIENT_CONSTRUCTOR_ADD_BUN,
  INGREDIENT_CONSTRUCTOR_CLEAR,
  INGREDIENT_CONSTRUCTOR_CUSTOM_ID,
  INGREDIENT_CONSTRUCTOR_DELETE,
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
      console.log(state.ingredientsConstructor);
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

    case INGREDIENT_CONSTRUCTOR_CUSTOM_ID: {
      return {
        ...state,
        ingredientsConstructor: [
          ...state.ingredientsConstructor.map((item) =>
            true
              ? {
                  ...item,
                  count: 1,
                  customId: Number((Math.random() * 1000).toFixed(0)),
                }
              : item
          ),
        ],
      };
    }

    case INGREDIENT_CONSTRUCTOR_DELETE: {
      return {
        ...state,
        ingredientsConstructor: [...state.ingredientsConstructor].filter(
          (item) => item.customId !== action.customId
        ),
      };
    }

    case INGREDIENT_CONSTRUCTOR_ADD_BUN: {
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
