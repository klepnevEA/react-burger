import React from "react";

import styles from "./index.module.css";

interface Props {
  closeModal: () => void;
}

function ModalOverlay(props: Props) {
  const { closeModal } = props;
  return (
    <>
      <div className={styles["modal-overlay"]} onClick={closeModal}></div>
    </>
  );
}

export default ModalOverlay;
