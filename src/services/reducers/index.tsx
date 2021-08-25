import { combineReducers } from "redux";
import { ingredientReducer } from "./ingredientList";
import { ingredientConstructorBurgerReducer } from "./ingredientBurger";
import { ingredientDetailsReducer } from "./ingredientDetails";
import { orderDetailsReducer } from "./orderDetails";
import { sendMailReducer } from "./forgotPassword";
import { registerReducer } from "./register";
import { resetPassword } from "./resetPassword";

export const rootReducer = combineReducers({
  ingredientList: ingredientReducer,
  ingredientConstructorBurger: ingredientConstructorBurgerReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer,
  sendMailReducer: sendMailReducer,
  registerReducer: registerReducer,

  resetPassword: resetPassword,
});

export type RootState = ReturnType<typeof rootReducer>;
