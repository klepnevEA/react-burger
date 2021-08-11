import React from "react";
import IngredientDetails from "../IngredientDetails";

import styles from "./index.module.css";

import { TDataItem } from "../../../src/interface";
import { INGREDIENT_DATAILS_OPEN } from "../../services/actions";
import { useDispatch } from "react-redux";
interface Props {
  ingredientsType: {
    list: TDataItem[];
    name: string;
    type: string;
  };
}

function IngredientList(props: Props) {
  const { ingredientsType } = props;

  const dispatch = useDispatch();

  const openIngredients = (ingredient: TDataItem) => {
    dispatch({
      type: INGREDIENT_DATAILS_OPEN,
      ingredient,
    });
  };

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
