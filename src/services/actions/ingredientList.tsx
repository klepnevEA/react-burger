export const GET_FEED: "GET_FEED" = "GET_FEED";
export const GET_FEED_FAILED: "GET_FEED_FAILED" = "GET_FEED_FAILED";
export const GET_FEED_SUCCESS: "GET_FEED_SUCCESS" = "GET_FEED_SUCCESS";
export const INGREDIENT_LIST_COUNT_BUN: "INGREDIENT_LIST_COUNT_BUN" =
  "INGREDIENT_LIST_COUNT_BUN";

export const INGREDIENT_LIST_COUNT_INGREDIENTS: "INGREDIENT_LIST_COUNT_INGREDIENTS" =
  "INGREDIENT_LIST_COUNT_INGREDIENTS";
export const INGREDIENT_LIST_COUNT_CLEAR: "INGREDIENT_LIST_COUNT_CLEAR" =
  "INGREDIENT_LIST_COUNT_CLEAR";
export const INGREDIENT_LIST_COUNT_INGREDIENTS_DECREASE: "INGREDIENT_LIST_COUNT_INGREDIENTS_DECREASE" =
  "INGREDIENT_LIST_COUNT_INGREDIENTS_DECREASE";

export interface TIngredient {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  count?: number;
  _id?: string;
  customId?: string;
}

export interface IGetFeed {
  readonly type: typeof GET_FEED;
}

export interface IGetFeedFailed {
  readonly type: typeof GET_FEED_FAILED;
}

export interface IGetFeedSuccess {
  readonly type: typeof GET_FEED_SUCCESS;
  readonly ingredients: TIngredient[];
}
export interface IIngredientListCountBun {
  readonly type: typeof INGREDIENT_LIST_COUNT_BUN;
  readonly ellementId: { ingredientId: string };
}

export interface IIngredientListCountIngredients {
  readonly type: typeof INGREDIENT_LIST_COUNT_INGREDIENTS;
  readonly ellementId: { ingredientId: string };
}
export interface IIngredientListCountClear {
  readonly type: typeof INGREDIENT_LIST_COUNT_CLEAR;
}
export interface IIngredientListCountIngredientsDecrease {
  readonly type: typeof INGREDIENT_LIST_COUNT_INGREDIENTS_DECREASE;
  readonly ellementId: string;
}

export type TActions =
  | IGetFeed
  | IGetFeedFailed
  | IGetFeedSuccess
  | IIngredientListCountBun
  | IIngredientListCountIngredients
  | IIngredientListCountIngredients
  | IIngredientListCountClear
  | IIngredientListCountIngredientsDecrease;
