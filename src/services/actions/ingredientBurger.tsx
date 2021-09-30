export const INGREDIENT_CONSTRUCTOR_ADD: "INGREDIENT_CONSTRUCTOR_ADD" =
  "INGREDIENT_CONSTRUCTOR_ADD";
export const INGREDIENT_CONSTRUCTOR_ADD_BUN: "INGREDIENT_CONSTRUCTOR_ADD_BUN" =
  "INGREDIENT_CONSTRUCTOR_ADD_BUN";
export const INGREDIENT_CONSTRUCTOR_CLEAR: "INGREDIENT_CONSTRUCTOR_CLEAR" =
  "INGREDIENT_CONSTRUCTOR_CLEAR";
export const INGREDIENT_CONSTRUCTOR_CUSTOM_ID: "INGREDIENT_CONSTRUCTOR_CUSTOM_ID" =
  "INGREDIENT_CONSTRUCTOR_CUSTOM_ID";
export const INGREDIENT_CONSTRUCTOR_DELETE: "INGREDIENT_CONSTRUCTOR_DELETE" =
  "INGREDIENT_CONSTRUCTOR_DELETE";
export const REOTDER_INGREDIENTS: "REOTDER_INGREDIENTS" = "REOTDER_INGREDIENTS";

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
  __v: string | number;
  count?: number;
  _id?: string;
  customId?: string;
}

export interface IIngredientConstructorAdd {
  readonly type: typeof INGREDIENT_CONSTRUCTOR_ADD;
  readonly ellement: TIngredient[];
}

export interface IIngredientConstructorAddBun {
  readonly type: typeof INGREDIENT_CONSTRUCTOR_ADD_BUN;
}

export interface IIngredientConstructorClear {
  readonly type: typeof INGREDIENT_CONSTRUCTOR_CLEAR;
}

export interface IIngredientConstructorCustomId {
  readonly type: typeof INGREDIENT_CONSTRUCTOR_CUSTOM_ID;
}
export interface IIngredientConstructorDelete {
  readonly type: typeof INGREDIENT_CONSTRUCTOR_DELETE;
}
export interface IReorderItems {
  readonly type: typeof REOTDER_INGREDIENTS;
}

export type TActions =
  | IIngredientConstructorAdd
  | IIngredientConstructorAddBun
  | IIngredientConstructorClear
  | IIngredientConstructorCustomId
  | IIngredientConstructorDelete
  | IReorderItems;
