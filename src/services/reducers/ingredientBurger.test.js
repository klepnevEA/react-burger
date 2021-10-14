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
        ingredientsConstructor: [],
        totalPriceIngredients: 0,
        item: {
          calories: 420,
          carbohydrates: 53,
          fat: 24,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          name: "Краторная булка N-200i",
          price: 1255,
          proteins: 80,
          type: "bun",
          __v: 0,
          _id: "60d3b41abdacab0026a733c6",
        },
        customId: "123",
      })
    ).toEqual(
      expect.objectContaining({
        ingredientsConstructor: [],
        totalPriceBun: 0,
        totalPriceIngredients: -1255,
      })
    );
  });
  it("should handle INGREDIENT_CONSTRUCTOR_ADD_BUN", () => {
    expect(
      ingredientConstructorBurgerReducer(burgerReducerState, {
        type: INGREDIENT_CONSTRUCTOR_ADD_BUN,
        ingredientsConstructorBun: [],
        totalPriceBun: 0,
        ellement: [
          {
            calories: 420,
            carbohydrates: 53,
            fat: 24,
            image: "https://code.s3.yandex.net/react/code/bun-02.png",
            image_large:
              "https://code.s3.yandex.net/react/code/bun-02-large.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            name: "Краторная булка N-200i",
            price: 1255,
            proteins: 80,
            type: "bun",
            __v: 0,
            _id: "60d3b41abdacab0026a733c6",
          },
        ],
      })
    ).toEqual(
      expect.objectContaining({
        ingredientsConstructor: [],
        ingredientsConstructorBun: {
          calories: 420,
          carbohydrates: 53,
          fat: 24,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          name: "Краторная булка N-200i",
          price: 1255,
          proteins: 80,
          type: "bun",
          __v: 0,
          _id: "60d3b41abdacab0026a733c6",
        },
        totalPriceBun: 2510,
        totalPriceIngredients: 0,
      })
    );
  });
});
