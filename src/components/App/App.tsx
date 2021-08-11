import React, { useEffect } from "react";
import AppHeader from "../AppHeader";
import BurgerConstructor from "../BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients";
import Modal from "../Modal";
import styles from "./app.module.css";
import OrderDetails from "../OrderDetails";
import IngredientModal from "../IngredientModal";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/reducers/app";
import { RootState } from "../../services/reducers";

function App() {
  const dispatch = useDispatch();
  const { feedRequest } = useSelector((state: RootState) => state.appData);

  const { isOpenIngredientsDetals } = useSelector(
    (state: RootState) => state.ingredientDetails
  );
  const { isOpenOrder } = useSelector((state: RootState) => state.orderDetails);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
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
  );
}

export default App;
