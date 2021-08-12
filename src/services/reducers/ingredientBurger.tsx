// список всех ингредиентов в текущем конструкторе бургера

import {
  INGREDIENT_CONSTRUCTOR_ADD,
  INGREDIENT_CONSTRUCTOR_ADD__BUN,
} from "../actions";

const ingredientConstructorBurgerReducerState = {
  ingredientsConstructor: [],
  ingredientsConstructorBun: {},
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
      };
    }
    case INGREDIENT_CONSTRUCTOR_ADD__BUN: {
      return {
        ...state,
        ingredientsConstructorBun: action.ellement[0],
      };
    }
    default: {
      return state;
    }
  }
};
