import React, { useEffect } from "react";
import {
  ListIcon,
  BurgerIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import { getAuthUser } from "../../services/actions";

export function AppHeader() {
  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      getAuthUser();
    }
  }, []);

  return (
    <header className={`pb-4 pt-4 ${styles.header}`}>
      <div className={styles.container}>
        <div className={`${styles.col}`}>
          <nav className={styles.nav}>
            <ul className={styles["nav__list"]}>
              <li
                className={`mr-2 ${styles["nav__link"]} ${styles["nav__link_active"]}`}
              >
                <NavLink
                  exact
                  to={{ pathname: `/` }}
                  className={`pl-5 pr-5 ${styles["nav__link"]}`}
                  activeStyle={{
                    color: "var(--text-primary-color)",
                  }}
                >
                  <BurgerIcon type="primary" />
                  <span className={`ml-2 text text_type_main-default`}>
                    Конструктор
                  </span>
                </NavLink>
              </li>
              <li className={`mr-2 ${styles["nav__link"]}`}>
                <NavLink
                  exact
                  to={{ pathname: `/order-list` }}
                  className={`pl-5 pr-5 ${styles["nav__link"]}`}
                  activeStyle={{
                    color: "var(--text-primary-color)",
                  }}
                >
                  <ListIcon type="primary" />
                  <span className={`ml-2 text text_type_main-default`}>
                    Лента заказов
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`${styles.col} ${styles["col_center"]}`}>
          <Logo />
        </div>
        <div className={`${styles.col} ${styles["col_right"]}`}>
          <NavLink
            to="/profile"
            className={styles.profile}
            activeStyle={{
              color: "var(--text-primary-color)",
            }}
          >
            <ProfileIcon type="secondary" />
            <span className={`ml-2 text text_type_main-default`}>
              Личный кабинет
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
