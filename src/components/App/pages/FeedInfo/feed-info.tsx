import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import bun from "../../../../images/bun-02.png";
import styles from "./index.module.css";

export function FeedInfo() {
  return (
    <div className={styles["feed-info"]}>
      <div className="mb-6">
        <div className={styles["feed-info__number"]}>
          <div className="text text_type_digits-default">#034533</div>
        </div>

        <h1 className="text text_type_main-medium">
          Black Hole Singularity острый бургер
        </h1>
        <div className={styles["feed-info__status"]}>Выполнен</div>
      </div>
      <div className={styles["composition"]}>
        <div className="text text_type_main-medium mb-6">Состав:</div>
        <ul className={styles["list"]}>
          <li className={styles["list__item"]}>
            <div className={styles["list__img"]}>
              <img src={bun} alt="img" />
            </div>
            <div className="text text_type_main-default">
              Флюоресцентная булка R2-D3
            </div>
            <div className={styles["composition__price"]}>
              <span className="text text_type_digits-default">2 x 20</span>
              <CurrencyIcon type="primary" />
            </div>
          </li>
          <li className={styles["list__item"]}>
            <div className={styles["list__img"]}>
              <img src={bun} alt="img" />
            </div>
            <div className="text text_type_main-default">
              Флюоресцентная булка R2-D3
            </div>
            <div className={styles["composition__price"]}>
              <span className="text text_type_digits-default">2 x 20</span>
              <CurrencyIcon type="primary" />
            </div>
          </li>
          <li className={styles["list__item"]}>
            <div className={styles["list__img"]}>
              <img src={bun} alt="img" />
            </div>
            <div className="text text_type_main-default">
              Флюоресцентная булка R2-D3
            </div>
            <div className={styles["composition__price"]}>
              <span className="text text_type_digits-default">2 x 20</span>
              <CurrencyIcon type="primary" />
            </div>
          </li>
          <li className={styles["list__item"]}>
            <div className={styles["list__img"]}>
              <img src={bun} alt="img" />
            </div>
            <div className="text text_type_main-default">
              Флюоресцентная булка R2-D3
            </div>
            <div className={styles["composition__price"]}>
              <span className="text text_type_digits-default">2 x 20</span>
              <CurrencyIcon type="primary" />
            </div>
          </li>
          <li className={styles["list__item"]}>
            <div className={styles["list__img"]}>
              <img src={bun} alt="img" />
            </div>
            <div className="text text_type_main-default">
              Флюоресцентная булка R2-D3
            </div>
            <div className={styles["composition__price"]}>
              <span className="text text_type_digits-default">2 x 20</span>
              <CurrencyIcon type="primary" />
            </div>
          </li>
          <li className={styles["list__item"]}>
            <div className={styles["list__img"]}>
              <img src={bun} alt="img" />
            </div>
            <div className="text text_type_main-default">
              Флюоресцентная булка R2-D3
            </div>
            <div className={styles["composition__price"]}>
              <span className="text text_type_digits-default">2 x 20</span>
              <CurrencyIcon type="primary" />
            </div>
          </li>
          <li className={styles["list__item"]}>
            <div className={styles["list__img"]}>
              <img src={bun} alt="img" />
            </div>
            <div className={styles["list__name"]}>
              Флюоресцентная булка R2-D3
            </div>
            <div className={styles["composition__price"]}>
              <span className="text text_type_digits-default">2 x 20</span>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        </ul>
        <div className="mt-4">
          <div className={styles["composition__info"]}>
            <div className={styles["composition__date"]}>
              Вчера, 13:50 i-GMT+3
            </div>
            <div className={styles["composition__price"]}>
              <span className="text text_type_digits-default">510</span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
