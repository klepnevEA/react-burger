import React from "react";
import AppHeader from "../AppHeader";
import BurgerConstructor from "../BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients";
import styles from "./app.module.css";
import Data from "../../utils/data.js";

function App() {
  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.col}>
            <BurgerIngredients dataBurger={Data} />
          </div>
          <div className={styles.col}>
            <BurgerConstructor />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
