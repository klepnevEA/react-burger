export interface TOrder {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  count?: number | string;
  _id: string;
}

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

export interface TParams {
  background: {
    pathname: string;
    search: string;
    hash: string;
    state: string;
  };
}

export interface TUser {
  email: string;
  password: string;
  name: string;
}

export interface TIngredientList {
  feedRequest: boolean;
  feedFailed: boolean;
  ingredients: TIngredient[];
}
