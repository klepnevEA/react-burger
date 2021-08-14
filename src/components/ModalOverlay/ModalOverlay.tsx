import React from "react";

import styles from "./index.module.css";

function ModalOverlay(props: any) {
  const { closeModal } = props;

  return (
    <>
      <div className={styles["modal-overlay"]} onClick={closeModal} />
    </>
  );
}

export default ModalOverlay;
