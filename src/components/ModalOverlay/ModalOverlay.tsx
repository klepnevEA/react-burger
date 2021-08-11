import React from "react";
import { useDispatch } from "react-redux";
import {
  INGREDIENT_DATAILS_CLOSE,
  ORDER_DATAILS_CLOSE,
} from "../../services/actions";

import styles from "./index.module.css";

function ModalOverlay() {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({
      type: INGREDIENT_DATAILS_CLOSE,
    });
    dispatch({
      type: ORDER_DATAILS_CLOSE,
    });
  };

  return (
    <>
      <div className={styles["modal-overlay"]} onClick={closeModal}></div>
    </>
  );
}

export default ModalOverlay;
