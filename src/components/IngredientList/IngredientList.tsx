import React from "react";
import IngredientDetails from "../IngredientDetails";

import styles from "./index.module.css";

function IngredientList(props: any) {
  const { ingredients, openIngredients } = props;

  return (
    <div className={styles["ingredient-list"]}>
      <div className="text text_type_main-medium pb-6">{ingredients.name}</div>
      <ul className={styles.list}>
        {ingredients.list.map((elem: any) => {
          return (
            <li
              key={elem._id}
              className={`pr-3 pl-3 pb-10 ${styles.item}`}
              onClick={() => openIngredients(elem)}
            >
              <IngredientDetails ingredient={elem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default IngredientList;
