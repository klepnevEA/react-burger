import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader";
import BurgerConstructor from "../BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients";
import Modal from "../Modal";
import styles from "./app.module.css";
import OrderDetails from "../OrderDetails";
import IngredientModal from "../IngredientModal";

function App() {
  const [isOpenOrder, setisOpenOrder] = useState(false);
  const [isOpenIngredient, setisOpenIngredient] = useState(false);
  const [isData, setIsData] = useState([]);
  const [ingredient, setingredient] = useState(isData[0]);
  const url = "https://norma.nomoreparties.space/api/ingredients ";

  const order = () => {
    setisOpenOrder(true);
  };

  const closeModal = () => {
    setisOpenOrder(false);
    setisOpenIngredient(false);
    setingredient(isData[0]);
  };

  const openIngredients = (ingredient: any) => {
    setingredient(ingredient);
    setisOpenIngredient(true);
  };

  const addDate = () => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then((data) => setIsData(data.data))
      .catch((err) => console.log(`Ошибка ${err}`));
  };

  useEffect(addDate, []);

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <div className={styles.container}>
        <main className={styles.main}>
          {isData.length ? (
            <>
              <div className={styles.col}>
                <BurgerIngredients
                  dataBurger={isData}
                  openIngredients={openIngredients}
                />
              </div>
              <div className={styles.col}>
                <BurgerConstructor
                  dataBurger={isData}
                  openOrder={order}
                  openIngredients={openIngredients}
                />
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
