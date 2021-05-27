/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { TDataItem } from "../../../src/interface";
import styles from "./index.module.css";

interface TDataProps {
  data: TDataItem;
}

function IngredientModal(props: TDataProps) {
  const { data } = props;

  return (
    <div className={styles["content-wrapper"]}>
      <div className="mb-8 text text_type_main-large">Детали ингредиента</div>
      <div className={`mb-4 ${styles.image}`}>
        <img src={data.image_large} alt="image" />
      </div>
      <div className={`mb-2 text text_type_main-default ${styles.text}`}>
        {data.name}
      </div>
      <ul className={styles.structure}>
        <li className="mr-5">
          <div className="text text_type_main-default">Калории,ккал</div>
          <div className="text text_type_digits-default">{data.calories}</div>
        </li>
        <li className="mr-5">
          <div className="text text_type_main-default">Белки, г</div>
          <div className="text text_type_digits-default">{data.proteins}</div>
        </li>
        <li className="mr-5">
          <div className="text text_type_main-default">Жиры, г</div>
          <div className="text text_type_digits-default">{data.fat}</div>
        </li>
        <li className="mr-5">
          <div className="text text_type_main-default">Углеводы, г</div>
          <div className="text text_type_digits-default">
            {data.carbohydrates}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default IngredientModal;
