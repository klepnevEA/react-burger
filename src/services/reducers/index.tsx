import { combineReducers } from "redux";
import { ingredientReducer } from "./ingredientList";
import { ingredientConstructorBurgerReducer } from "./ingredientBurger";
import { ingredientDetailsReducer } from "./ingredientDetails";
import { orderDetailsReducer } from "./orderDetails";

export const rootReducer = combineReducers({
  ingredientList: ingredientReducer,
  ingredientConstructorBurger: ingredientConstructorBurgerReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
