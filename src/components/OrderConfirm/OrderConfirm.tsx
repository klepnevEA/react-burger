import React from "react";
import Done from "../../images/done.svg";

import styles from "./index.module.css";

function OrderConfirm(props: any) {
  return (
    <div className={styles["content-wrapper"]}>
      <div className="mb-8 text text_type_digits-large">034536</div>
      <div className="mb-15 text text_type_main-medium">
        идентификатор заказа
      </div>
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

export default OrderConfirm;
