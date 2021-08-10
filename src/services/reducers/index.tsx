import { combineReducers } from "redux";
import { appReducer } from "./app";
import { ingredientReducer } from "./ingredient";
import { ingredientBurgerReducer } from "./ingredientBurger";
import { ingredientDetailsReducer } from "./ingredientDetails";
import { orderDetailsReducer } from "./orderDetails";

export const rootReducer = combineReducers({
  appData: appReducer,
  ingredients: ingredientReducer,
  ingredientBurger: ingredientBurgerReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
