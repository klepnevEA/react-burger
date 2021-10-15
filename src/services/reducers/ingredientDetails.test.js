import {
  INGREDIENT_DATAILS_CLOSE,
  INGREDIENT_DATAILS_OPEN,
} from "../actions/ingredientDetails";
import { ingredientDetailsReducer } from "./ingredientDetails";

const ingredientConstructorBurgerReducerState = {
  ingredient: {},
  isOpenIngredientsDetals: false,
};
describe("Action creators", () => {
  it("should handle INGREDIENT_DATAILS_OPEN", () => {
    expect(
      ingredientDetailsReducer(ingredientConstructorBurgerReducerState, {
        type: INGREDIENT_DATAILS_OPEN,
        ingredient: {
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
        isOpenIngredientsDetals: true,
      })
    ).toEqual(
      expect.objectContaining({
        ingredient: {
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
        isOpenIngredientsDetals: true,
      })
    );
  });

  it("should handle INGREDIENT_DATAILS_CLOSE", () => {
    expect(
      ingredientDetailsReducer(ingredientConstructorBurgerReducerState, {
        type: INGREDIENT_DATAILS_CLOSE,
        ingredient: {
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
        isOpenIngredientsDetals: false,
      })
    ).toEqual(
      expect.objectContaining({
        ingredient: null,
        isOpenIngredientsDetals: false,
      })
    );
  });
});
