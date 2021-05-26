import React from "react";
import {
  ListIcon,
  BurgerIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import LogoSmall from "../../images/logo.svg";
import styles from "./index.module.css";
import { MenuIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

function AppHeader() {
  return (
    <header className={`pb-4 pt-4 ${styles.header}`}>
      <div className={styles.container}>
        <div className={`${styles.col}`}>
          <nav className={styles.nav}>
            <ul className={styles["nav__list"]}>
              <li
                className={`mr-2 ${styles["nav__link"]} ${styles["nav__link_active"]}`}
              >
                <a href="/" className={`pl-5 pr-5 ${styles["nav__link"]}`}>
                  <BurgerIcon type="primary" />
                  <span className={`ml-2 text text_type_main-default`}>
                    Конструктор
                  </span>
                </a>
              </li>
              <li className={`mr-2 ${styles["nav__link"]}`}>
                <a href="/" className={`pl-5 pr-5 ${styles["nav__link"]}`}>
                  <ListIcon type="primary" />
                  <span className={`ml-2 text text_type_main-default`}>
                    Лента заказов
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`${styles.col} ${styles["col_center"]}`}>
          <Logo />
        </div>
        <div className={`${styles.col} ${styles["col_right"]}`}>
          <a href="/" className={styles.profile}>
            <ProfileIcon type="secondary" />
            <span className={`ml-2 text text_type_main-default`}>
              Личный кабинет
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
