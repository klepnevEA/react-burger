import React from "react";
import Image from "../../images/meat-01.png";

import styles from "./index.module.css";

function IngredientModal(props: any) {
  return (
    <div className={styles["content-wrapper"]}>
      <div className="mb-8 text text_type_main-large">Детали ингредиента</div>
      <div className={`mb-4 ${styles.image}`}>
        <img src={Image} alt="image" />
      </div>
      <div className={`mb-2 text text_type_main-default ${styles.text}`}>
        Биокотлета из марсианской Магнолии
      </div>
      <ul className={styles.structure}>
        <li className="mr-5">
          <div className="text text_type_main-default">Калории,ккал</div>
          <div className="text text_type_digits-default">244,4</div>
        </li>
        <li className="mr-5">
          <div className="text text_type_main-default">Белки, г</div>
          <div className="text text_type_digits-default">12,2</div>
        </li>
        <li className="mr-5">
          <div className="text text_type_main-default">Жиры, г</div>
          <div className="text text_type_digits-default">17,2</div>
        </li>
        <li className="mr-5">
          <div className="text text_type_main-default">Углеводы, г</div>
          <div className="text text_type_digits-default">10,2</div>
        </li>
      </ul>
    </div>
  );
}

export default IngredientModal;
