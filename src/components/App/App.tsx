import React from "react";
import AppHeader from "../AppHeader";
import BurgerConstructor from "../BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients";
import Modal from "../Modal";
import styles from "./app.module.css";
import Data from "../../utils/data.js";
import OrderConfirm from "../OrderConfirm";
import IngredientModal from "../IngredientModal/IngredientModal";

function App() {
  const state = {
    isOpenOrder: false,
  };

  const order = () => {
    state.isOpenOrder = true;
  };

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.col}>
            <BurgerIngredients dataBurger={Data} />
          </div>
          <div className={styles.col}>
            <BurgerConstructor dataBurger={Data} openOrder={order} />
          </div>
        </main>
      </div>
      {state.isOpenOrder ? (
        <Modal>
          <OrderConfirm />
        </Modal>
      ) : null}
      {false ? (
        <Modal>
          <IngredientModal />
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
