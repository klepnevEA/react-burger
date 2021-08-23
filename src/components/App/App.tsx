import React, { useEffect } from "react";
import AppHeader from "../AppHeader";
import Modal from "../Modal";
import styles from "./app.module.css";
import OrderDetails from "../OrderDetails";
import IngredientModal from "../IngredientModal";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../services/reducers";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getIngredients } from "../../services/actions";
import Main from "./pages/main";

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
    <DndProvider backend={HTML5Backend}>
      <div className={styles.wrapper}>
        <AppHeader />
        <div className={styles.container}>
          <main className={styles.main}>
            <Main />
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
