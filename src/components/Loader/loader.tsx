import React from "react";
import cn from "classnames";
import styles from "./index.module.css";

interface TProps {
  fullPage?: boolean;
}

export function Loader(props: TProps) {
  const { fullPage } = props;
  return (
    <div
      className={cn(styles.loadingWrapper, {
        [styles.loadingWrapperFull]: fullPage,
      })}
    >
      <div className={styles.loading}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
