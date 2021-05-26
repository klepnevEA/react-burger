import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./index.module.css";

function Modal(props: any) {
  return (
    <div className={styles.modal}>
      <div className={`p-10 pn-15 ${styles["modal-body"]}`}>
        <a href="/" className={styles["modal-close"]}>
          <CloseIcon type="primary" />
        </a>
        <div className={styles["modal-content"]}>{props.children}</div>
      </div>
    </div>
  );
}

export default Modal;
