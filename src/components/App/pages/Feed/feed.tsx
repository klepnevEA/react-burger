import React from "react";
import styles from "./index.module.css";
import bun from "../../../../images/bun-02.png";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export function Feed() {
  return (
    <div className={styles["feed"]}>
      <h1 className="text text_type_main-medium mb-5">Лента заказов</h1>
      <div className={styles.row}>
        <div className={styles.col}>
          <ul className={styles["order-list"]}>
            <li className={styles["order-list__item"]}>
              <div className={styles["order"]}>
                <div className={styles["order__head"]}>
                  <div className={styles["order__number"]}>#034535</div>
                  <div className={styles["order__date"]}>
                    Сегодня, 16:20 i-GMT+3
                  </div>
                </div>
                <div className={styles["order__title"]}>
                  <h2 className="text text_type_main-medium">
                    Death Star Starship Main бургер
                  </h2>
                </div>
                <div className={styles["order__info"]}>
                  <div className={styles["order__composition"]}>
                    <div>
                      <img src={bun} alt="" />
                    </div>
                    <div>
                      <img src={bun} alt="" />
                    </div>
                    <div>
                      <img src={bun} alt="" />
                    </div>
                    <div>
                      <img src={bun} alt="" />
                    </div>
                  </div>
                  <div className={styles["order__price"]}>
                    <span className="text text_type_digits-default">123</span>
                    <CurrencyIcon type="primary" />
                  </div>
                </div>
              </div>
            </li>
            <li className={styles["order-list__item"]}>
              <div className={styles["order"]}>
                <div className={styles["order__head"]}>
                  <div className={styles["order__number"]}>#034535</div>
                  <div className={styles["order__date"]}>
                    Сегодня, 16:20 i-GMT+3
                  </div>
                </div>
                <div className={styles["order__title"]}>
                  <h2 className="text text_type_main-medium">
                    Death Star Starship Main бургер
                  </h2>
                </div>
                <div className={styles["order__info"]}>
                  <div className={styles["order__composition"]}>
                    <div>
                      <img src={bun} alt="" />
                    </div>
                    <div>
                      <img src={bun} alt="" />
                    </div>
                    <div>
                      <img src={bun} alt="" />
                    </div>
                    <div>
                      <img src={bun} alt="" />
                    </div>
                  </div>
                  <div className={styles["order__price"]}>
                    <span className="text text_type_digits-default">123</span>
                    <CurrencyIcon type="primary" />
                  </div>
                </div>
              </div>
            </li>
            <li className={styles["order-list__item"]}>
              <div className={styles["order"]}>
                <div className={styles["order__head"]}>
                  <div className={styles["order__number"]}>#034535</div>
                  <div className={styles["order__date"]}>
                    Сегодня, 16:20 i-GMT+3
                  </div>
                </div>
                <div className={styles["order__title"]}>
                  <h2 className="text text_type_main-medium">
                    Death Star Starship Main бургер
                  </h2>
                </div>
                <div className={styles["order__info"]}>
                  <div className={styles["order__composition"]}>
                    <div>
                      <img src={bun} alt="" />
                    </div>
                    <div>
                      <img src={bun} alt="" />
                    </div>
                    <div>
                      <img src={bun} alt="" />
                    </div>
                    <div>
                      <img src={bun} alt="" />
                    </div>
                  </div>
                  <div className={styles["order__price"]}>
                    <span className="text text_type_digits-default">123</span>
                    <CurrencyIcon type="primary" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <div className={styles["order-list-done"]}>
            <div className={styles["order-list-done__col"]}>
              <div className="text text_type_main-medium mb-6">Готовы:</div>
              <ul className={styles["order-list-done__list-done"]}>
                <li className="text text_type_digits-default">034533</li>
                <li className="text text_type_digits-default">034533</li>
                <li className="text text_type_digits-default">034533</li>
                <li className="text text_type_digits-default">034533</li>
                <li className="text text_type_digits-default">034533</li>
              </ul>
            </div>
            <div className={styles["order-list-done__col"]}>
              <div className="text text_type_main-medium mb-6">В работе:</div>
              <ul>
                <li className="text text_type_digits-default">034533</li>
                <li className="text text_type_digits-default">034533</li>
                <li className="text text_type_digits-default">034533</li>
                <li className="text text_type_digits-default">034533</li>
                <li className="text text_type_digits-default">034533</li>
              </ul>
            </div>
          </div>
          <div className="text text_type_main-medium mb-20">
            <div className="text text_type_main-medium">
              Выполнено за все время:
            </div>
            <div className="text text_type_digits-large">28 752</div>
          </div>
          <div className="text text_type_main-medium mb-20">
            <div className="text text_type_main-medium">
              Выполнено за сегодня:
            </div>
            <div className="text text_type_digits-large">138</div>
          </div>
        </div>
      </div>
    </div>
  );
}
