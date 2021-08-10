import React, { useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./index.module.css";
import { TDataItem } from "../../../src/interface";
import { RootState } from "../../services/reducers";
import { useSelector } from "react-redux";

interface Props {
  // dataBurger: TDataItem[];
  openOrder: () => void;
}

function BurgerConstructor(props: Props) {
  const { openOrder } = props;
  const ingredientsBun = [];
  const { ingredients } = useSelector((state: RootState) => state.appData);

  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i].type !== "bun") {
      ingredientsBun.push(ingredients[i]);
    }
  }

  return (
    <div className="pt-25">
      <div className={`mb-10 ${styles.ingrediants}`}>
        <div className={`pl-8 mb-2 ${styles["ingredients-top"]}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={ingredientsBun[0]?.name + " (верх)"}
            price={ingredientsBun[0]?.price}
            thumbnail={ingredientsBun[0]?.image}
          />
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
              {ingredients.map((item: any) => {
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
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={ingredientsBun[0]?.name + " (низ)"}
            price={ingredientsBun[0]?.price}
            thumbnail={ingredientsBun[0]?.image}
          />
        </div>
      </div>

      <div className={`pb-8 ${styles.order}`}>
        <span className="text text_type_digits-medium">600</span>
        <CurrencyIcon type="primary" />
        <div className="pl-10">
          <Button type="primary" size="large" onClick={() => openOrder()}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BurgerConstructor;
