import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useDrag } from "react-dnd";
import styles from "./index.module.css";
import { TDataItem } from "../../../src/interface";

interface Props {
  ingredient: TDataItem;
}

function IngredientDetails(props: Props) {
  const { ingredient } = props;
  const ingredientId = ingredient._id;
  const ingredientType = ingredient.type;
  const [{ isDrag }, dragRef] = useDrag({
    type: ingredientType,
    item: { ingredientId },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  return (
    <>
      {!isDrag && (
        <div className={styles.ingrediant} ref={dragRef}>
          <Counter count={ingredient.__v} size="default" />
          <div className={styles.image}>
            <img src={ingredient.image} alt={ingredient.name} />
          </div>
          <div className={`p-1 ${styles.price}`}>
            <span className="text text_type_main-default">
              {ingredient.price}
            </span>
            <span className="ml-2">
              <CurrencyIcon type="primary" />
            </span>
          </div>
          <div className={`p-1 ${styles.name}`}>
            <span className="text text_type_main-default">
              {ingredient.name}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default IngredientDetails;
