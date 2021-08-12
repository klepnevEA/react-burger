import React from "react";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./index.module.css";
import { RootState } from "../../services/reducers";
import { useDispatch, useSelector } from "react-redux";
import {
  INGREDIENT_CONSTRUCTOR_ADD,
  INGREDIENT_CONSTRUCTOR_ADD__BUN,
  INGREDIENT_CONSTRUCTOR_CLEAR,
  ORDER_DATAILS_OPEN,
} from "../../services/actions";
import { TDataItem } from "../../interface";
import { useDrop } from "react-dnd";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const {
    ingredientsConstructor,
    ingredientsConstructorBun,
    totalPriceBun,
    totalPriceIngredients,
  } = useSelector((state: RootState) => state.ingredientConstructorBurger);
  const { ingredients } = useSelector(
    (state: RootState) => state.ingredientList
  );

  const handleDrop = (itemId: any) => {
    dispatch({
      type: INGREDIENT_CONSTRUCTOR_ADD,
      ellement: ingredients.filter(
        (element: any) => element._id === itemId.ingredientId
      ),
    });
    // setElements([
    //   ...elements.filter((element: any) => element._id !== itemId.ingredientId),
    // ]);

    // setDraggedElements([
    //   ...draggedElements,
    //   ...elements.filter((element: any) => element._id === itemId.ingredientId),
    // ]);
  };

  const handleDropBun = (itemId: any) => {
    dispatch({
      type: INGREDIENT_CONSTRUCTOR_ADD__BUN,
      ellement: ingredients.filter(
        (element: any) => element._id === itemId.ingredientId
      ),
    });
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: ["main", "sauce"],
    drop(itemId) {
      handleDrop(itemId);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const [, dropTargetBunTop] = useDrop({
    accept: ["bun"],
    drop(itemId) {
      handleDropBun(itemId);
    },
  });

  const border = isHover ? "1px solid #2f2f37" : "1px solid transparent";

  const openOrder = () => {
    if (ingredientsConstructorBun.name && ingredientsConstructor.length) {
      dispatch({
        type: ORDER_DATAILS_OPEN,
      });
      dispatch({
        type: INGREDIENT_CONSTRUCTOR_CLEAR,
      });
    }
  };

  return (
    <div className="pt-25">
      <div className={`mb-10 ${styles.ingrediants}`} ref={dropTargetBunTop}>
        <div className={`pl-8 mb-2 ${styles["ingredients-top"]}`}>
          {ingredientsConstructorBun.name && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={ingredientsConstructorBun.name + " (верх)"}
              price={ingredientsConstructorBun.price}
              thumbnail={ingredientsConstructorBun.image}
            />
          )}
        </div>
        <div className={styles["ingredients-list-wrapper"]}>
          <div className={`${styles.list}`}>
            <ul
              className={styles["ingredients-list"]}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                border: border,
              }}
              ref={dropTarget}
            >
              {ingredientsConstructor.map((item: TDataItem, index) => {
                return (
                  <li key={index} className={styles["ingredients-item"]}>
                    <div className={`mr-1 ${styles["ingredients-drag"]}`}>
                      <DragIcon type="primary" />
                    </div>
                    <ConstructorElement
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={`pl-8 mt-2 ${styles["ingredients-bottom"]}`}>
          {ingredientsConstructorBun.name && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={ingredientsConstructorBun.name + " (низ)"}
              price={ingredientsConstructorBun.price}
              thumbnail={ingredientsConstructorBun.image}
            />
          )}
        </div>
      </div>

      <div className={`pb-8 ${styles.order}`}>
        <span className="text text_type_digits-medium">
          {totalPriceBun + totalPriceIngredients}
        </span>
        <CurrencyIcon type="primary" />
        <div className="pl-10">
          <Button type="primary" size="large" onClick={openOrder}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BurgerConstructor;
