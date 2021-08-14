import React from "react";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./index.module.css";

const IngredientsListItem = (props: any) => {
  const { item, index, handleClose } = props;

  return (
    <li key={index} className={styles["ingredients-item"]}>
      <div className={`mr-1 ${styles["ingredients-drag"]}`}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => handleClose(item)}
      />
    </li>
  );
};

export default IngredientsListItem;
