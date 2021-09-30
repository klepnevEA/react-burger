import React from "react";

import styles from "./index.module.css";

interface TProps {
  closeModal: () => void;
}

export function ModalOverlay(props: TProps) {
  console.log(props);
  const { closeModal } = props;

  return (
    <>
      <div className={styles["modal-overlay"]} onClick={closeModal} />
    </>
  );
}
