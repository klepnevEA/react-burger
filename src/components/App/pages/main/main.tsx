import React from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { BurgerIngredients } from "../../../BurgerIngredients";
import { BurgerConstructor } from "../../../BurgerConstructor";
import { RootState } from "../../../../services/reducers";
import { Loader } from "../../../Loader";

export function Main() {
  const { feedRequest } = useSelector(
    (state: RootState) => state.ingredientList
  );
  return (
    <>
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
        <Loader />
      )}
    </>
  );
}
