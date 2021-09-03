import React, { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./index.module.css";
import { createPortal } from "react-dom";
import ModalOverlay from "../ModalOverlay";
import { useDispatch } from "react-redux";
import {
  INGREDIENT_DATAILS_CLOSE,
  ORDER_DATAILS_CLOSE,
} from "../../services/actions";
import { useHistory } from "react-router-dom";

interface Props {
  children: object;
}

const reactModals = document.getElementById("react-modals");

function Modal(props: Props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const closeModal = () => {
    history.replace({ pathname: "/" });
    dispatch({
      type: ORDER_DATAILS_CLOSE,
    });
  };

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
          <ModalOverlay closeModal={closeModal} />
        </>,
        reactModals
      )
    : null;
}

export default Modal;
