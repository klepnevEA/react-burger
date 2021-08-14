import React from "react";
import { useDrop } from "react-dnd";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import { RootState } from "../../services/reducers";
import {
  INGREDIENT_CONSTRUCTOR_ADD,
  INGREDIENT_CONSTRUCTOR_ADD_BUN,
  INGREDIENT_CONSTRUCTOR_CLEAR,
  INGREDIENT_LIST_COUNT_BUN,
  INGREDIENT_LIST_COUNT_INGREDIENTS,
  ORDER_DATAILS_OPEN,
  INGREDIENT_LIST_COUNT_CLEAR,
  INGREDIENT_CONSTRUCTOR_CUSTOM_ID,
  INGREDIENT_CONSTRUCTOR_DELETE,
  INGREDIENT_LIST_COUNT_INGREDIENTS_DECREASE,
  REOTDER_INGREDIENTS,
} from "../../services/actions";
import { TDataItem } from "../../interface";
import IngredientsListItem from "../ingredientsListItem/ingredientsListItem";

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

  const handleDrop = (itemId: any, customId: number) => {
    dispatch({
      type: INGREDIENT_CONSTRUCTOR_ADD,
      customId: customId,
      ellement: ingredients.filter((element: any) => {
        return element._id === itemId.ingredientId;
      }),
    });
    dispatch({
      type: INGREDIENT_CONSTRUCTOR_CUSTOM_ID,
    });
  };

  const handleDropBun = (itemId: any) => {
    dispatch({
      type: INGREDIENT_CONSTRUCTOR_ADD_BUN,
      ellement: ingredients.filter((element: any) => {
        return element._id === itemId.ingredientId;
      }),
    });
  };

  const handheDropCount = (itemId: any) => {
    dispatch({
      type: INGREDIENT_LIST_COUNT_INGREDIENTS,
      ellementId: itemId,
    });
  };

  const handheDropCountBun = (itemId: any) => {
    dispatch({
      type: INGREDIENT_LIST_COUNT_BUN,
      ellementId: itemId,
    });
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: ["main", "sauce"],
    drop(itemId) {
      handleDrop(itemId, Math.random());
      handheDropCount(itemId);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const [, dropTargetBunTop] = useDrop({
    accept: ["bun"],
    drop(itemId) {
      handleDropBun(itemId);
      handheDropCountBun(itemId);
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
      dispatch({
        type: INGREDIENT_LIST_COUNT_CLEAR,
      });
    }
  };

  const clearOrder = () => {
    dispatch({
      type: INGREDIENT_CONSTRUCTOR_CLEAR,
    });
    dispatch({
      type: INGREDIENT_LIST_COUNT_CLEAR,
    });
  };

  const handleClose = (item: TDataItem) => {
    dispatch({
      type: INGREDIENT_CONSTRUCTOR_DELETE,
      customId: item.customId,
    });
    dispatch({
      type: INGREDIENT_LIST_COUNT_INGREDIENTS_DECREASE,
      ellementId: item._id,
    });
  };

  const moveIngredient = (dragIndex: any, hoverIndex: any) => {
    const newIngredient = [...ingredientsConstructor];
    newIngredient.splice(hoverIndex, 0, newIngredient.splice(dragIndex, 1)[0]);
    dispatch({ type: REOTDER_INGREDIENTS, payload: newIngredient });
  };

  // const moveIngredient = useCallback(
  //   (dragIndex, hoverIndex) => {
  //     const newIngredient = [...ingredientsConstructor];
  //     newIngredient.splice(
  //       hoverIndex,
  //       0,
  //       newIngredient.splice(dragIndex, 1)[0]
  //     );
  //     dispatch({ type: REOTDER_INGREDIENTS, payload: newIngredient });
  //   },
  //   [ingredientsConstructor]
  // );

  const renderIngredient = (itemIngredient: any, index: any) => {
    return (
      <IngredientsListItem
        key={index}
        index={index}
        id={itemIngredient.customId}
        moveIngredient={moveIngredient}
        itemIngredient={itemIngredient}
        handleClose={handleClose}
      />
    );
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
              {ingredientsConstructor.map((itemIngredient: TDataItem, index) =>
                renderIngredient(itemIngredient, index)
              )}
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
        <div>
          <Button type="secondary" size="large" onClick={clearOrder}>
            Очистить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BurgerConstructor;
