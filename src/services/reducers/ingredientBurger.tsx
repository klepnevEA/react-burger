// список всех ингредиентов в текущем конструкторе бургера

import {
  INGREDIENT_CONSTRUCTOR_ADD,
  INGREDIENT_CONSTRUCTOR_ADD_BUN,
  INGREDIENT_CONSTRUCTOR_CLEAR,
  INGREDIENT_CONSTRUCTOR_CUSTOM_ID,
  INGREDIENT_CONSTRUCTOR_DELETE,
  REOTDER_INGREDIENTS,
} from "../actions/ingredientBurger";

import type { TActions } from "../actions/ingredientBurger";

export interface TIngredientConstructorBurgerReducerState {
  ingredientsConstructor: [];
  ingredientsConstructorBun: {};
  totalPriceBun: number;
  totalPriceIngredients: number;
}

const ingredientConstructorBurgerReducerState: TIngredientConstructorBurgerReducerState =
  {
    ingredientsConstructor: [],
    ingredientsConstructorBun: {},
    totalPriceBun: 0,
    totalPriceIngredients: 0,
  };

export const ingredientConstructorBurgerReducer = (
  state = ingredientConstructorBurgerReducerState,
  action: TActions
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

    case INGREDIENT_CONSTRUCTOR_CUSTOM_ID: {
      return {
        ...state,
        ingredientsConstructor: [
          ...state.ingredientsConstructor.map((item) => {
            return {
              ...item,
              customId: Number((Math.random() * 1000).toFixed(0)),
            };
          }),
        ],
      };
    }

    case INGREDIENT_CONSTRUCTOR_DELETE: {
      return {
        ...state,
        ingredientsConstructor: [...state.ingredientsConstructor].filter(
          (item) => item.customId !== action.customId
        ),
        totalPriceIngredients: state.totalPriceIngredients - action.item.price,
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
    case REOTDER_INGREDIENTS: {
      return {
        ...state,
        ingredientsConstructor: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
