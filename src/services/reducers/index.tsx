import { combineReducers } from "redux";
import { ingredientReducer } from "./ingredientList";
import { ingredientConstructorBurgerReducer } from "./ingredientBurger";
import { ingredientDetailsReducer } from "./ingredientDetails";
import { orderDetailsReducer } from "./orderDetails";
import { sendMailReducer } from "./forgotPassword";
import { registerReducer } from "./register";
import { resetPassword } from "./resetPassword";
import { loginReducer } from "./login";
import { wsReducer } from "./ws-reducer";
import { wsReducerAuth } from "./ws-reducer-auth";

export const rootReducer = combineReducers({
  ingredientList: ingredientReducer,
  ingredientConstructorBurger: ingredientConstructorBurgerReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer,
  sendMailReducer: sendMailReducer,
  registerReducer: registerReducer,
  resetPassword: resetPassword,
  loginReducer: loginReducer,
  ws: wsReducer,
  wsAuth: wsReducerAuth,
});

export type RootState = ReturnType<typeof rootReducer>;
