import React, { useEffect, useState } from "react";
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
  INGREDIENT_CONSTRUCTOR_CUSTOM_ID,
  INGREDIENT_CONSTRUCTOR_DELETE,
  REOTDER_INGREDIENTS,
} from "../../services/actions/ingredientBurger";

import {
  INGREDIENT_LIST_COUNT_BUN,
  INGREDIENT_LIST_COUNT_INGREDIENTS,
  INGREDIENT_LIST_COUNT_CLEAR,
  INGREDIENT_LIST_COUNT_INGREDIENTS_DECREASE,
  setOrder,
  getAuthUser,
} from "../../services/actions";
import { IngredientsListItem } from "../IngredientsListItem/ingredientsListItem";
import { useHistory } from "react-router-dom";
import { TIngredient } from "../../services/types";

export function BurgerConstructor() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    ingredientsConstructor,
    ingredientsConstructorBun,
    totalPriceBun,
    totalPriceIngredients,
  } = useSelector((state: RootState) => state.ingredientConstructorBurger);

  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  useEffect(() => {
    getAuthUser().then((res) => {
      if (res.success) {
        setTimeout(() => {
          setIsLoginSuccess(res.success);
        }, 0);
      }
    });
  }, []);

  const { ingredients } = useSelector(
    (state: RootState) => state.ingredientList
  );

  const handleDrop = (itemId: string, customId: number) => {
    dispatch({
      type: INGREDIENT_CONSTRUCTOR_ADD,
      customId: customId,
      ellement: ingredients.filter((element: TIngredient) => {
        return element._id === itemId.ingredientId;
      }),
    });
    dispatch({
      type: INGREDIENT_CONSTRUCTOR_CUSTOM_ID,
    });
  };

  const handleClose = (item: TIngredient) => {
    dispatch({
      type: INGREDIENT_CONSTRUCTOR_DELETE,
      customId: item.customId,
      item: item,
    });
    dispatch({
      type: INGREDIENT_LIST_COUNT_INGREDIENTS_DECREASE,
      ellementId: item._id,
    });
  };

  const handleDropBun = (itemId: string) => {
    dispatch({
      type: INGREDIENT_CONSTRUCTOR_ADD_BUN,
      ellement: ingredients.filter((element: TIngredient) => {
        return element._id === itemId.ingredientId;
      }),
    });
  };

  const handheDropCount = (itemId: string) => {
    dispatch({
      type: INGREDIENT_LIST_COUNT_INGREDIENTS,
      ellementId: itemId,
    });
  };

  const handheDropCountBun = (itemId: string) => {
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
    let ingredients = [];
    if (isLoginSuccess) {
      if (ingredientsConstructor.length > 0) {
        if (ingredientsConstructorBun && ingredientsConstructor) {
          ingredients.push(ingredientsConstructorBun._id);
          ingredientsConstructor.map((item) => {
            ingredients.push(item._id);
            return item;
          });
          ingredients.push(ingredientsConstructorBun._id);

          dispatch(setOrder(ingredients));
        }
      }
    } else {
      history.replace({ pathname: `/login` });
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

  const moveIngredient = (dragIndex: number, hoverIndex: number) => {
    const newIngredient = [...ingredientsConstructor];
    newIngredient.splice(hoverIndex, 0, newIngredient.splice(dragIndex, 1)[0]);
    dispatch({ type: REOTDER_INGREDIENTS, payload: newIngredient });
  };

  const renderIngredient = (itemIngredient: TIngredient, index: number) => {
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
              {ingredientsConstructor.map(
                (itemIngredient: TIngredient, index) =>
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
}
