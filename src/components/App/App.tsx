import React, { useEffect } from "react";

import { IngredientModal } from "../IngredientModal";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";

import { AppHeader } from "../AppHeader";
import { Modal } from "../Modal";
import styles from "./app.module.css";
import { OrderDetails } from "../OrderDetails";
import { RootState } from "../../services/reducers";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getIngredients } from "../../services/actions";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
import { Profile } from "./pages/Profile";
import { Page404 } from "./pages/Page404";
import { ProtectedRoute } from "../ProtectedRoute";
import { ProtectedAuthRoute } from "../ProtectedAuthRoute";
import { IngredientDescription } from "../IngredientDescription/IngredientDescription";
import { OrderList } from "./pages/OrderList";

function App() {
  const ModalSwitch = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    let background =
      (history.action === "PUSH" || history.action === "REPLACE") &&
      location.state &&
      location?.state?.background;

    const { isOpenOrder } = useSelector(
      (state: RootState) => state.orderDetails
    );

    useEffect(() => {
      dispatch(getIngredients());
    }, [dispatch]);

    return (
      <DndProvider backend={HTML5Backend}>
        <div className={styles.wrapper}>
          <AppHeader />
          <div className={styles.container}>
            <main className={styles.main}>
              <Switch location={background || location}>
                <Route path="/" exact={true}>
                  <Main />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <ProtectedAuthRoute path="/register">
                  <Register />
                </ProtectedAuthRoute>
                <Route path="/forgot-password">
                  <ForgotPassword />
                </Route>
                <ProtectedAuthRoute path="/reset-password">
                  <ResetPassword />
                </ProtectedAuthRoute>
                <ProtectedRoute path="/profile">
                  <Profile />
                </ProtectedRoute>
                <Route path="/order-list">
                  <OrderList />
                </Route>
                <Route
                  path="/ingredients/:ingredientId"
                  children={<IngredientDescription />}
                />
                <Route>
                  <Page404 />
                </Route>
              </Switch>

              {background && (
                <Route
                  path="/ingredients/:ingredientId"
                  children={
                    <Modal>
                      <IngredientModal />
                    </Modal>
                  }
                />
              )}
            </main>
          </div>
          {isOpenOrder ? (
            <Modal>
              <OrderDetails />
            </Modal>
          ) : null}
        </div>
      </DndProvider>
    );
  };
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

export default App;
