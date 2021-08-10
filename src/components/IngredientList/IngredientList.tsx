import React from "react";
import IngredientDetails from "../IngredientDetails";

import styles from "./index.module.css";

import { TDataItem } from "../../../src/interface";

interface Props {
  ingredientsType: {
    list: TDataItem[];
    name: string;
    type: string;
  };
  openIngredients: (arg0: TDataItem) => void;
}

function IngredientList(props: Props) {
  const { ingredientsType, openIngredients } = props;

  return (
    <div className={styles["ingredient-list"]}>
      <div className="text text_type_main-medium pb-6">
        {ingredientsType.name}
      </div>
      <ul className={styles.list}>
        {ingredientsType.list.map((elem: TDataItem) => {
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
