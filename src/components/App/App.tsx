import React, { useEffect } from "react";

import IngredientModal from "../IngredientModal";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppHeader from "../AppHeader";
import Modal from "../Modal";
import styles from "./app.module.css";
import OrderDetails from "../OrderDetails";
import { RootState } from "../../services/reducers";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getIngredients } from "../../services/actions";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import Page404 from "./pages/Page404";
import { ProtectedRoute } from "../ProtectedRoute";

function App() {
  const dispatch = useDispatch();

  const { isOpenIngredientsDetals } = useSelector(
    (state: RootState) => state.ingredientDetails
  );

  const { isOpenOrder } = useSelector((state: RootState) => state.orderDetails);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
        <div className={styles.wrapper}>
          <AppHeader />
          <div className={styles.container}>
            <main className={styles.main}>
              <Switch>
                <ProtectedRoute path="/" exact={true}>
                  <Main />
                </ProtectedRoute>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/forgot-password">
                  <ForgotPassword />
                </Route>
                <Route path="/reset-password">
                  <ResetPassword />
                </Route>
                <ProtectedRoute path="/profile">
                  <Profile />
                </ProtectedRoute>
                <Route>
                  <Page404 />
                </Route>
              </Switch>
            </main>
          </div>
          {isOpenOrder ? (
            <Modal>
              <OrderDetails />
            </Modal>
          ) : null}
          {isOpenIngredientsDetals ? (
            <Modal>
              <IngredientModal />
            </Modal>
          ) : null}
        </div>
      </DndProvider>
    </Router>
  );
}

export default App;
