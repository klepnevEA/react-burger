import React, { useEffect } from "react";
import styles from "./index.module.css";
import bun from "../../../../images/bun-02.png";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../services/reducers";
import { WS_AUTH_CONNECTION_START } from "../../../../services/actions";

export function ProfileOrders() {
  const dispatch = useDispatch();
  const { ingredients } = useSelector(
    (store: RootState) => store.ingredientList
  );
  const { orders } = useSelector((store: RootState) => store.wsAuth);
  let totaPrice = 0;

  const getDays = (days: number) =>
    days === 0
      ? "Сегодня"
      : days === 1
      ? "Вчера"
      : days > 1
      ? `${days} дня(-ей) назад`
      : "Чтото не так...";

  const dateTime = (date: string) => {
    const day: Date = new Date(date);
    const today: Date = new Date();

    today.setHours(0, 0, 0, 0);
    const diffTime: number = Math.ceil(
      (today.getTime() - day.getTime()) / (60 * 60 * 24 * 1000)
    );
    const hours = day.getHours() > 9 ? day.getHours() : `0${day.getHours()}`;
    const min =
      day.getMinutes() > 9 ? day.getMinutes() : `0${day.getMinutes()}`;

    return `${getDays(diffTime)}, ${hours}:${min} i-GMT+${
      (day.getTimezoneOffset() * -1) / 60
    }`;
  };

  const getBurgerIngredients = (
    arrIdBurgerIngredients: Array<string>,
    arrAllIngredients: Array<any>
  ) => {
    const list = arrIdBurgerIngredients
      ?.map((id: string) =>
        arrAllIngredients.filter((item: any) => item._id === id)
      )
      ?.flat();
    totaPrice = list?.reduce(
      (acc: number, curr: any) => (acc += curr.price),
      0
    );

    return list;
  };

  const getOrder = (orders: Array<string>) => {
    return orders?.reduce(
      (acc: { [name: string]: Array<any> }, curr) => {
        curr.status === "done"
          ? (acc["done"] = [...acc["done"], curr])
          : (acc["pending"] = [...acc["pending"], curr]);
        return acc;
      },
      { done: [], pending: [] }
    );
  };

  const status = getOrder(orders);

  useEffect(() => {
    console.log(`orders : ${orders}`);
  }, []);

  return (
    <ul className={styles["order-list"]}>
      {orders?.map((order, index) => {
        return (
          <li className={styles["order-list__item"]} key={index}>
            <div className={styles["order"]}>
              <div className={styles["order__head"]}>
                <div className={styles["order__number"]}>#{order.number}</div>
                <div className={styles["order__date"]}>
                  {dateTime(order.updatedAt)}
                </div>
              </div>
              <div className={styles["order__title"]}>
                <h2 className="text text_type_main-medium">{order.name}</h2>
              </div>
              <div>{order.status === "done" ? "Выполнен" : "Готовится"}</div>
              <div className={styles["order__info"]}>
                <div className={styles["order__composition"]}>
                  {getBurgerIngredients(order.ingredients, ingredients).map(
                    (elem, index: number) => {
                      if (index < 6) {
                        return (
                          <div key={index}>
                            <img src={elem.image_mobile} alt={elem.name} />
                          </div>
                        );
                      }
                      return null;
                    }
                  )}
                </div>
                <div className={styles["order__price"]}>
                  <span className="text text_type_digits-default">
                    {totaPrice}
                  </span>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
