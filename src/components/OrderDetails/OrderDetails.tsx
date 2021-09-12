import React from "react";
import { useSelector } from "react-redux";
import Done from "../../images/done.svg";
import { RootState } from "../../services/reducers";

import styles from "./index.module.css";

export function OrderDetails() {
  const { orderNumber, orderName } = useSelector(
    (state: RootState) => state.orderDetails
  );
  return (
    <div className={styles["content-wrapper"]}>
      <div className="mb-8 text text_type_digits-large">{orderNumber}</div>
      <div className="mb-15 text text_type_main-medium">{orderName}</div>
      <div className="mb-15">
        <img src={Done} alt="done" />
      </div>
      <div className="mb-2 text_type_main-default">
        Ваш заказ начали готовить
      </div>
      <div className={`mb-2 text_type_main-default ${styles.primary}`}>
        Дождитесь готовности на орбитальной станции
      </div>
    </div>
  );
}
