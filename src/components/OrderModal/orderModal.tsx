import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../services/reducers";
import styles from "./index.module.css";

export function OrderModal() {
  const { total, totalToday, orders } = useSelector(
    (store: RootState) => store.ws
  );
  const { ingredients } = useSelector(
    (state: RootState) => state.ingredientList
  );
  let totaPrice = 0;
  const { id } = useParams<{ id?: string }>();

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

  const findOrder = () => {
    let order = orders.find((item: any) => item._id === id);

    return order;
  };
  const order = findOrder();
  const listIngredients = getBurgerIngredients(order.ingredients, ingredients);

  const orderCount = (arr: Array<any>) => {
    return arr?.reduce(
      (acc: any, curr: any) => {
        const id = curr._id;
        acc.count[id] = (acc.count[id] || 0) + 1;
        console.log(acc);
        return acc;
      },
      { count: {} }
    );
  };

  const unicalIngredients: Array<any> = Array.from(new Set(listIngredients));
  const orderPrise = orderCount(listIngredients);

  return (
    <div className={styles["feed-info"]}>
      <div className="mb-6">
        <div className={styles["feed-info__number"]}>
          <div className="text text_type_digits-default">#{order.number}</div>
        </div>

        <h1 className="text text_type_main-medium">{order.name}</h1>
        <div className={styles["feed-info__status"]}>Выполнен</div>
      </div>
      <div className={styles["composition"]}>
        <div className="text text_type_main-medium mb-6">Состав:</div>
        <ul className={styles["list"]}>
          {unicalIngredients.map((elem, index: number) => {
            if (index < 6) {
              return (
                <li className={styles["list__item"]} key={index}>
                  <div className={styles["list__img"]}>
                    <img src={elem.image_mobile} alt={elem.name} />
                  </div>
                  <div className="text text_type_main-default">{elem.name}</div>
                  <div className={styles["composition__price"]}>
                    <span className="text text_type_digits-default">
                      {orderPrise?.count[elem._id]} x {elem.price}
                    </span>
                    <CurrencyIcon type="primary" />
                  </div>
                </li>
              );
            }
            return null;
          })}
        </ul>
        <div className="mt-4">
          <div className={styles["composition__info"]}>
            <div className={styles["composition__date"]}>
              {dateTime(order.updatedAt)}
            </div>
            <div className={styles["composition__price"]}>
              <span className="text text_type_digits-default">{totaPrice}</span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
