import {
  INGREDIENT_CONSTRUCTOR_ADD_BUN,
  INGREDIENT_CONSTRUCTOR_CUSTOM_ID,
  INGREDIENT_CONSTRUCTOR_DELETE,
} from "../actions/ingredientBurger";
import { INGREDIENT_DATAILS_OPEN } from "../actions/ingredientDetails";
import { ingredientConstructorBurgerReducer } from "./ingredientBurger";

const burgerReducerState = {
  ingredientsConstructor: [],
  ingredientsConstructorBun: {},
  totalPriceBun: 0,
  totalPriceIngredients: 0,
};
describe("Action creators", () => {
  it("should return the initial state", () => {
    expect(ingredientConstructorBurgerReducer(undefined, {})).toEqual(
      burgerReducerState
    );
  });
  it("should handle INGREDIENT_DATAILS_OPEN", () => {
    expect(
      ingredientConstructorBurgerReducer(burgerReducerState, {
        type: INGREDIENT_DATAILS_OPEN,
      })
    ).toEqual(
      expect.objectContaining({
        ingredientsConstructor: [],
        ingredientsConstructorBun: {},
        totalPriceBun: 0,
        totalPriceIngredients: 0,
      })
    );
  });
  it("should handle INGREDIENT_CONSTRUCTOR_CUSTOM_ID", () => {
    expect(
      ingredientConstructorBurgerReducer(burgerReducerState, {
        type: INGREDIENT_CONSTRUCTOR_CUSTOM_ID,
      })
    ).toEqual(
      expect.objectContaining({
        ingredientsConstructor: [],
      })
    );
  });
  it("should handle INGREDIENT_CONSTRUCTOR_DELETE", () => {
    expect(
      ingredientConstructorBurgerReducer(burgerReducerState, {
        type: INGREDIENT_CONSTRUCTOR_DELETE,
      })
    ).toEqual(
      expect.objectContaining({
        ingredientsConstructor: [],
        totalPriceIngredients: 0,
      })
    );
  });
  it("should handle INGREDIENT_CONSTRUCTOR_ADD_BUN", () => {
    expect(
      ingredientConstructorBurgerReducer(burgerReducerState, {
        type: INGREDIENT_CONSTRUCTOR_ADD_BUN,
        ingredientsConstructorBun: [],
        totalPriceBun: 0,
      })
    ).toEqual(
      expect.objectContaining({
        ingredientsConstructor: [],
        ingredientsConstructorBun: [],
        totalPriceBun: 0,
        totalPriceIngredients: 0,
      })
    );
  });
});
