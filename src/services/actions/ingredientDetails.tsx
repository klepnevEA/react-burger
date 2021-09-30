/* sendEmail */
export const INGREDIENT_DATAILS_OPEN: "INGREDIENT_DATAILS_OPEN" =
  "INGREDIENT_DATAILS_OPEN";
export const INGREDIENT_DATAILS_CLOSE: "INGREDIENT_DATAILS_CLOSE" =
  "INGREDIENT_DATAILS_CLOSE";

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

export interface IIngredientDetalsOpen {
  readonly type: typeof INGREDIENT_DATAILS_OPEN;
  readonly ingredient: TIngredient;
}

export interface IIngredientDetalsClose {
  readonly type: typeof INGREDIENT_DATAILS_CLOSE;
}

export type TActions = IIngredientDetalsOpen | IIngredientDetalsClose;
