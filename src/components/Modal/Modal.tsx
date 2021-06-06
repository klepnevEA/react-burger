import React, { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./index.module.css";
import { createPortal } from "react-dom";

interface Props {
  closeModal: () => void;
  children: object;
}

const reactModals = document.getElementById("react-modals");

function Modal(props: Props) {
  const { closeModal } = props;

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
      return;
    };
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("keydown", close);
    };
  }, [closeModal]);

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
