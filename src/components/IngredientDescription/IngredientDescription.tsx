import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../services/reducers";
import styles from "./index.module.css";
import { TIngredient, TIngredientList } from "../../services/types";

export function IngredientDescription() {
  const ingredients: TIngredientList = useSelector(
    (state: RootState) => state.ingredientList
  );
  const { ingredientId } = useParams<{ ingredientId?: string }>();

  const findIngredient = () => {
    let ingredient = ingredients.ingredients.find(
      (item: TIngredient) => item._id === ingredientId
    );

    return ingredient;
  };

  const ingredient = findIngredient();

  return (
    <div className={styles["content-wrapper"]}>
      <div className="mb-8 text text_type_main-large">Детали ингредиента</div>
      <div className={`mb-4 ${styles.image}`}>
        <img src={ingredient?.image_large} alt="ingredient" />
      </div>
      <div className={`mb-2 text text_type_main-default ${styles.text}`}>
        {ingredient?.name}
      </div>
      <ul className={styles.structure}>
        <li className="mr-5">
          <div className="text text_type_main-default">Калории,ккал</div>
          <div className="text text_type_digits-default">
            {ingredient?.calories}
          </div>
        </li>
        <li className="mr-5">
          <div className="text text_type_main-default">Белки, г</div>
          <div className="text text_type_digits-default">
            {ingredient?.proteins}
          </div>
        </li>
        <li className="mr-5">
          <div className="text text_type_main-default">Жиры, г</div>
          <div className="text text_type_digits-default">{ingredient?.fat}</div>
        </li>
        <li className="mr-5">
          <div className="text text_type_main-default">Углеводы, г</div>
          <div className="text text_type_digits-default">
            {ingredient?.carbohydrates}
          </div>
        </li>
      </ul>
    </div>
  );
}
