import { combineReducers } from "redux";
import { ingredientReducer } from "./ingredient";
import { ingredientBurgerReducer } from "./ingredientBurger";
import { ingredientDetailsReducer } from "./ingredientDetails";
import { orderDetailsReducer } from "./orderDetails";

export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  ingredientBurger: ingredientBurgerReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer,
});
