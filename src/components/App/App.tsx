import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader";
import BurgerConstructor from "../BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients";
import Modal from "../Modal";
import styles from "./app.module.css";
import OrderDetails from "../OrderDetails";
import IngredientModal from "../IngredientModal";
import { ADD_DATA } from "../../services/actions";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/reducers/app";
import { RootState } from "../../services/reducers";

function App() {
  const [isOpenOrder, setisOpenOrder] = useState(false);
  const [isOpenIngredient, setisOpenIngredient] = useState(false);

  const dispatch = useDispatch();
  const { ingredients, feedRequest } = useSelector(
    (state: RootState) => state.appData
  );
  const [ingredient, setingredient] = useState(ingredients);

  const order = () => {
    setisOpenOrder(true);
  };

  const closeModal = () => {
    setisOpenOrder(false);
    setisOpenIngredient(false);
    setingredient(ingredients[0]);
  };

  const openIngredients = (ingredient: any) => {
    setingredient(ingredient);
    setisOpenIngredient(true);
  };

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
                <BurgerIngredients openIngredients={openIngredients} />
              </div>
              <div className={styles.col}>
                <BurgerConstructor openOrder={order} />
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
