import {
  GET_FEED,
  GET_FEED_FAILED,
  GET_FEED_SUCCESS,
  INGREDIENT_LIST_COUNT_BUN,
  INGREDIENT_LIST_COUNT_CLEAR,
  INGREDIENT_LIST_COUNT_INGREDIENTS,
  INGREDIENT_LIST_COUNT_INGREDIENTS_DECREASE,
} from "../actions/ingredientList";
import { ingredientReducer } from "./ingredientList";

const initialState = {
  feedRequest: false,
  feedFailed: false,
  ingredients: [],
};
describe("Action creators", () => {
  it("should handle GET_FEED", () => {
    expect(
      ingredientReducer(initialState, {
        type: GET_FEED,
        feedRequest: true,
        feedFailed: false,
      })
    ).toEqual(
      expect.objectContaining({
        feedRequest: true,
        feedFailed: false,
      })
    );
  });
  it("should handle GET_FEED_SUCCESS", () => {
    expect(
      ingredientReducer(initialState, {
        type: GET_FEED_SUCCESS,
        ingredients: [
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
        feedRequest: false,
      })
    ).toEqual(
      expect.objectContaining({
        ingredients: [
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
        feedRequest: false,
      })
    );
  });
  it("should handle GET_FEED_FAILED", () => {
    expect(
      ingredientReducer(initialState, {
        type: GET_FEED_FAILED,
        feedFailed: true,
        feedRequest: false,
      })
    ).toEqual(
      expect.objectContaining({
        feedFailed: true,
        feedRequest: false,
      })
    );
  });
  it("should handle INGREDIENT_LIST_COUNT_BUN", () => {
    expect(
      ingredientReducer(initialState, {
        type: INGREDIENT_LIST_COUNT_BUN,
        ingredients: [
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
        ellementId: { ingredientId: "2" },
        feedFailed: false,
        feedRequest: false,
      })
    ).toEqual(
      expect.objectContaining({
        ingredients: [[]],
        feedFailed: false,
        feedRequest: false,
      })
    );
  });

  it("should handle INGREDIENT_LIST_COUNT_INGREDIENTS", () => {
    expect(
      ingredientReducer(initialState, {
        type: INGREDIENT_LIST_COUNT_INGREDIENTS,
        ingredients: [
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
        ellementId: { ingredientId: "2" },
      })
    ).toEqual(
      expect.objectContaining({
        ingredients: [[]],
      })
    );
  });

  it("should handle INGREDIENT_LIST_COUNT_INGREDIENTS_DECREASE", () => {
    expect(
      ingredientReducer(initialState, {
        type: INGREDIENT_LIST_COUNT_INGREDIENTS_DECREASE,
        ingredients: [
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
        ellementId: "2",
      })
    ).toEqual(
      expect.objectContaining({
        ingredients: [[]],
      })
    );
  });

  it("should handle INGREDIENT_LIST_COUNT_CLEAR", () => {
    expect(
      ingredientReducer(initialState, {
        type: INGREDIENT_LIST_COUNT_CLEAR,
        ingredients: [
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
        ingredients: [[]],
      })
    );
  });
});
