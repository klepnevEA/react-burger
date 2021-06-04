import React, { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./index.module.css";
import { createPortal } from "react-dom";

const reactModals = document.getElementById("react-modals");

function Modal(props: any) {
  const { closeModal } = props;

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        closeModal();
      }
    });
  });

  return reactModals
    ? createPortal(
        <>
          <div className={styles.modal}>
            <div className={`p-10 pn-15 ${styles["modal-body"]}`}>
              <button className={styles["modal-close"]} onClick={closeModal}>
                <CloseIcon type="primary" />
              </button>
              <div className={styles["modal-content"]}>{props.children}</div>
            </div>
          </div>
        </>,
        reactModals
      )
    : null;
}

export default Modal;
