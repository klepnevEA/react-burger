import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Img from "../../images/bun-02.png";
import styles from "./index.module.css";

function BurgerConstructor() {
  return (
    <div className="pt-25">
      <Scrollbars
        className={`mb-10 ${styles.list}`}
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
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={20}
            thumbnail={Img}
          />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={Img}
          />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={Img}
          />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={Img}
          />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={Img}
          />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={Img}
          />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={Img}
          />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={Img}
          />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={Img}
          />
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={Img}
          />
        </div>
      </Scrollbars>
      <div className={`pb-10 ${styles.order}`}>
        <span className="text text_type_digits-medium">600</span>
        <CurrencyIcon type="primary" />
        <div className="pl-10">
          <Button type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BurgerConstructor;
