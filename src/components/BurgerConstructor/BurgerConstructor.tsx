import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./index.module.css";
import { RootState } from "../../services/reducers";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_DATAILS_OPEN } from "../../services/actions";
import { TDataItem } from "../../interface";

function BurgerConstructor() {
  // const ingredientsBun = [];
  const dispatch = useDispatch();
  const { ingredientsConstructor } = useSelector(
    (state: RootState) => state.ingredientConstructorBurger
  );

  const openOrder = () => {
    dispatch({
      type: ORDER_DATAILS_OPEN,
    });
  };

  // for (let i = 0; i < ingredientsConstructor.length; i++) {
  //   if (ingredientsConstructor[i]?.type !== "bun") {
  //     ingredientsBun.push(ingredientsConstructor[i]);
  //   }
  // }

  return (
    <div className="pt-25">
      <div className={`mb-10 ${styles.ingrediants}`}>
        <div className={`pl-8 mb-2 ${styles["ingredients-top"]}`}>
          {ingredientsConstructor.length > 0 && (
            <ConstructorElement
              type="top"
              isLocked={true}
              // text={ingredientsConstructor[0]?.name + " (верх)"}
              // price={ingredientsConstructor[0]?.price}
              // thumbnail={ingredientsConstructor[0]?.image}
              text={" (верх)"}
              price={1000}
              thumbnail={"!!!!"}
            />
          )}
        </div>
        <div className={styles["ingredients-list-wrapper"]}>
          <Scrollbars
            className={`${styles.list}`}
            renderThumbVertical={(props) => (
              <div {...props} className="thumb-vertical" />
            )}
            renderTrackVertical={(props) => (
              <div {...props} className="track-vertical" />
            )}
            renderThumbHorizontal={(props) => (
              <div {...props} className="thumb-horizontal" />
            )}
            renderTrackHorizontal={(props) => (
              <div {...props} className="track-horizontal" />
            )}
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
          >
            <ul
              className={styles["ingredients-list"]}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {ingredientsConstructor.map((item: TDataItem) => {
                return (
                  <li key={item._id} className={styles["ingredients-item"]}>
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
          </Scrollbars>
        </div>
        <div className={`pl-8 mt-2 ${styles["ingredients-bottom"]}`}>
          {ingredientsConstructor.length > 0 && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              // text={ingredientsConstructor[0]?.name + " (низ)"}
              // price={ingredientsConstructor[0]?.price}
              // thumbnail={ingredientsConstructor[0]?.image}
              text={" (низ)"}
              price={1000}
              thumbnail={"!!!!"}
            />
          )}
        </div>
      </div>

      <div className={`pb-8 ${styles.order}`}>
        <span className="text text_type_digits-medium">600</span>
        <CurrencyIcon type="primary" />
        <div className="pl-10">
          <Button type="primary" size="large" onClick={openOrder}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BurgerConstructor;
