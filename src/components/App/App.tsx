import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader";
import BurgerConstructor from "../BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients";
import Modal from "../Modal";
import styles from "./app.module.css";
import Data from "../../utils/data.js";
import OrderConfirm from "../OrderConfirm";
import IngredientModal from "../IngredientModal/IngredientModal";
import { TDataItem } from "../../../src/interface";

function App() {
  const [isOpenOrder, setisOpenOrder] = useState(false);
  const [isOpenIngredient, setisOpenIngredient] = useState(false);
  const [ingredient, setingredient] = useState(Data[0]);
  const url = "https://norma.nomoreparties.space/api/ingredients ";

  const order = () => {
    setisOpenOrder(true);
  };

  const closeModal = () => {
    setisOpenOrder(false);
    setisOpenIngredient(false);
    setingredient(Data[0]);
  };

  const openIngredients = (ingredient: TDataItem) => {
    setingredient(ingredient);
    setisOpenIngredient(true);
  };

  const addDate = () => {
    let ingredients = fetch(url).then((response) => response.json());
    console.log(ingredients);
  };

  useEffect(addDate, []);

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.col}>
            <BurgerIngredients
              dataBurger={Data}
              openIngredients={openIngredients}
            />
          </div>
          <div className={styles.col}>
            <BurgerConstructor
              dataBurger={Data}
              openOrder={order}
              openIngredients={openIngredients}
            />
          </div>
        </main>
      </div>
      {isOpenOrder ? (
        <Modal closeModal={closeModal}>
          <OrderConfirm />
        </Modal>
      ) : null}
      {isOpenIngredient && ingredient ? (
        <Modal closeModal={closeModal}>
          <IngredientModal data={ingredient} />
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
