import React, { useEffect } from "react";
import {
  ListIcon,
  BurgerIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink } from "react-router-dom";
import styles from "./index.module.css";
import { RootState } from "../../services/reducers";
import { useDispatch, useSelector } from "react-redux";
import { getChatsRequest } from "../../services/actions";

function AppHeader() {
  const { isLoginSuccess } = useSelector(
    (state: RootState) => state.loginReducer
  );

  return (
    <header className={`pb-4 pt-4 ${styles.header}`}>
      <div className={styles.container}>
        <div className={`${styles.col}`}>
          <nav className={styles.nav}>
            <ul className={styles["nav__list"]}>
              <li
                className={`mr-2 ${styles["nav__link"]} ${styles["nav__link_active"]}`}
              >
                <Link
                  to={{ pathname: `/` }}
                  className={`pl-5 pr-5 ${styles["nav__link"]}`}
                >
                  <BurgerIcon type="primary" />
                  <span className={`ml-2 text text_type_main-default`}>
                    Конструктор
                  </span>
                </Link>
              </li>
              <li className={`mr-2 ${styles["nav__link"]}`}>
                <Link
                  to={{ pathname: `/` }}
                  className={`pl-5 pr-5 ${styles["nav__link"]}`}
                >
                  <ListIcon type="primary" />
                  <span className={`ml-2 text text_type_main-default`}>
                    Лента заказов
                  </span>
                </Link>
              </li>
              <li>{isLoginSuccess ? "залолгинен" : "не залогинен"}</li>
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

export default AppHeader;
