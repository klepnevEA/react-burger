import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./index.module.css";

function IngredientDetails(props: any) {
  const { ingredient } = props;
  return (
    <div className={styles.ingrediant}>
      <Counter count={1} size="default" />
      <div className={styles.image}>
        <img src={ingredient.image} alt={ingredient.name} />
      </div>
      <div className={`p-1 ${styles.price}`}>
        <span className="text text_type_main-default">{ingredient.price}</span>
        <span className="ml-2">
          <CurrencyIcon type="primary" />
        </span>
      </div>
      <div className={`p-1 ${styles.name}`}>
        <span className="text text_type_main-default">{ingredient.name}</span>
      </div>
    </div>
  );
}

export default IngredientDetails;
