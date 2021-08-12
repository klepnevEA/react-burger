import React, { useEffect } from "react";
import AppHeader from "../AppHeader";
import BurgerConstructor from "../BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients";
import Modal from "../Modal";
import styles from "./app.module.css";
import OrderDetails from "../OrderDetails";
import IngredientModal from "../IngredientModal";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../services/reducers";
import { getIngredients } from "../../services/reducers/ingredientList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();
  const { feedRequest } = useSelector(
    (state: RootState) => state.ingredientList
  );

  const { isOpenIngredientsDetals } = useSelector(
    (state: RootState) => state.ingredientDetails
  );

  const { isOpenOrder } = useSelector((state: RootState) => state.orderDetails);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.wrapper}>
        <AppHeader />
        <div className={styles.container}>
          <main className={styles.main}>
            {!feedRequest ? (
              <>
                <div className={styles.col}>
                  <BurgerIngredients />
                </div>
                <div className={styles.col}>
                  <BurgerConstructor />
                </div>
              </>
            ) : (
              <div className={styles.loadingWrapper}>
                <div className={styles.loading}>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
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
  );
}

export default App;
