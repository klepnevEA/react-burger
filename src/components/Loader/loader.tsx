import React from "react";
import cn from "classnames";
import styles from "./index.module.css";

type TProps = {
  fullPage?: boolean;
};

export function Loader(props: any) {
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
