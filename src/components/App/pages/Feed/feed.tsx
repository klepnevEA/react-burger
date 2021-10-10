import React, { useEffect } from "react";
import styles from "./index.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../services/reducers";
import { Link, useLocation } from "react-router-dom";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../../../../services/actions/ws-reducer";
import { Loader } from "../../../Loader";
import { TOrder, TIngredient } from "../../../../services/types";

export function Feed() {
  const dispatch = useDispatch();
  const { ingredients } = useSelector(
    (store: RootState) => store.ingredientList
  );
  const { total, totalToday, orders } = useSelector(
    (store: RootState) => store.ws
  );

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
    });
  }, [dispatch]);
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_CLOSED });
  }, [dispatch]);

  let totaPrice: number = 0;
  const location = useLocation();

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
    arrIdBurgerIngredients: string[],
    arrAllIngredients: TIngredient[]
  ) => {
    const list = arrIdBurgerIngredients
      ?.map((id: string) =>
        arrAllIngredients.filter((item: TIngredient) => item._id === id)
      )
      ?.flat();
    totaPrice = list?.reduce(
      (acc: number, curr: TIngredient) => (acc += curr.price),
      0
    );
    return list;
  };

  const getOrder = (orders: TOrder[]) => {
    return orders?.reduce(
      (acc: { [name: string]: TOrder[] }, curr) => {
        curr.status === "done"
          ? (acc["done"] = [...acc["done"], curr])
          : (acc["pending"] = [...acc["pending"], curr]);
        return acc;
      },
      { done: [], pending: [] }
    );
  };

  const status = getOrder(orders);

  return (
    <>
      {orders.length ? (
        <div className={styles["feed"]}>
          <h1 className="text text_type_main-medium mb-5">Лента заказов</h1>
          <div className={styles.row}>
            <div className={styles.col}>
              <ul className={styles["order-list"]}>
                {orders.map((order: TOrder, index) => {
                  return (
                    <li className={styles["order-list__item"]} key={index}>
                      <Link
                        to={{
                          pathname: `/feed/${order._id}`,
                          state: { background: location },
                        }}
                        className={styles.link}
                      >
                        <div className={styles["order"]}>
                          <div className={styles["order__head"]}>
                            <div className={styles["order__number"]}>
                              #{order.number}
                            </div>
                            <div className={styles["order__date"]}>
                              {dateTime(order.updatedAt)}
                            </div>
                          </div>
                          <div className={styles["order__title"]}>
                            <h2 className="text text_type_main-medium">
                              {order.name}
                            </h2>
                          </div>
                          <div>
                            {order.status === "done" ? "Выполнен" : "Готовится"}
                          </div>
                          <div className={styles["order__info"]}>
                            <div className={styles["order__composition"]}>
                              {getBurgerIngredients(
                                order.ingredients,
                                ingredients
                              ).map((elem, index: number) => {
                                if (index < 6) {
                                  return (
                                    <div key={index}>
                                      <img
                                        src={elem.image_mobile}
                                        alt={elem.name}
                                      />
                                    </div>
                                  );
                                }
                                return null;
                              })}
                            </div>
                            <div className={styles["order__price"]}>
                              <span className="text text_type_digits-default">
                                {totaPrice}
                              </span>
                              <CurrencyIcon type="primary" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.col}>
              <div className={styles["order-list-done"]}>
                <div className={styles["order-list-done__col"]}>
                  <div className="text text_type_main-medium mb-6">Готовы:</div>
                  <ul className={styles["order-list-done__list-done"]}>
                    {status.done.map((elem, index: number) => {
                      if (index < 20) {
                        return (
                          <li
                            className="text text_type_digits-default"
                            key={index}
                          >
                            {elem.number}
                          </li>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </ul>
                </div>
                <div className={styles["order-list-done__col"]}>
                  <div className="text text_type_main-medium mb-6">
                    В работе:
                  </div>
                  <ul>
                    {status.pending.map((elem, index: number) => {
                      if (index < 20) {
                        return (
                          <li
                            className="text text_type_digits-default"
                            key={index}
                          >
                            {elem.number}
                          </li>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </ul>
                </div>
              </div>
              <div className="text text_type_main-medium mb-20">
                <div className="text text_type_main-medium">
                  Выполнено за все время:
                </div>
                <div className="text text_type_digits-large">{total}</div>
              </div>
              <div className="text text_type_main-medium mb-20">
                <div className="text text_type_main-medium">
                  Выполнено за сегодня:
                </div>
                <div className="text text_type_digits-large">{totalToday}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader fullPage={true} />
      )}
    </>
  );
}
