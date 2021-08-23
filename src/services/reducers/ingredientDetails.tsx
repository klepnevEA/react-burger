import { INGREDIENT_DATAILS_CLOSE, INGREDIENT_DATAILS_OPEN } from "../actions";

// объект текущего просматриваемого ингредиента

const ingredientDetailsState = {
  isOpenIngredientsDetals: false,
  ingredient: {},
};

export const ingredientDetailsReducer = (
  state = ingredientDetailsState,
  action: any
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
