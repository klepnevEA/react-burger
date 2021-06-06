import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader";
import BurgerConstructor from "../BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients";
import Modal from "../Modal";
import styles from "./app.module.css";
import Data from "../../utils/data.js";
import OrderDetails from "../OrderDetails";
import IngredientModal from "../IngredientModal";
import { TDataItem } from "../../../src/interface";

function App() {
  const [isOpenOrder, setisOpenOrder] = useState(false);
  const [isOpenIngredient, setisOpenIngredient] = useState(false);
  const [ingredient, setingredient] = useState(Data[0]);
  const [isData, setIsData] = useState([]);
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
    fetch(url)
      .then((response) => response.json())
      .then((data) => setIsData(data.data));
  };

  useEffect(addDate, []);

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.col}>
            {isData.length ? (
              <BurgerIngredients
                dataBurger={isData}
                openIngredients={openIngredients}
              />
            ) : null}
          </div>
          <div className={styles.col}>
            {isData.length ? (
              <BurgerConstructor
                dataBurger={isData}
                openOrder={order}
                openIngredients={openIngredients}
              />
            ) : null}
          </div>
        </main>
      </div>
      {isOpenOrder ? (
        <Modal closeModal={closeModal}>
          <OrderDetails />
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
