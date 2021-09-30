import React from "react";
import styles from "./index.module.css";
import { NavLink, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutRequest } from "../../../../services/actions";
import { FormProfile } from "../FormsProfile";
import { Page404 } from "../Page404";
import { ProfileOrders } from "../ProfileOrders";

export function Profile() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutRequest());
  };

  return (
    <div className={styles.profile}>
      <div className={styles.profileAside}>
        <ul className={styles.profileNav}>
          <li className={styles.profileItem}>
            <NavLink
              to={{ pathname: `/profile` }}
              activeStyle={{
                color: "var(--text-primary-color)",
              }}
              exact
              className={styles.profileLink}
            >
              <span className="text text_type_main-medium">Профиль</span>
            </NavLink>
          </li>
          <li className={styles.profileItem}>
            <NavLink
              to={{ pathname: `/profile/orders` }}
              className={styles.profileLink}
              exact
              activeStyle={{
                color: "var(--text-primary-color)",
              }}
            >
              <span className="text text_type_main-medium">
                История заказов
              </span>
            </NavLink>
          </li>
          <li className={styles.profileItem}>
            <NavLink
              to={{ pathname: `/login` }}
              className={styles.profileLink}
              exact
              activeStyle={{
                color: "var(--text-primary-color)",
              }}
              onClick={logout}
            >
              <span className="text text_type_main-medium">Выход</span>
            </NavLink>
          </li>
        </ul>
        <div className={styles.subText}>
          <div className="text text_type_main-default mt-30">
            В этом разделе вы можете
            <br /> изменить свои персональные данные
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/profile" exact={true}>
          <FormProfile />
        </Route>
        <Route path="/profile/orders" exact={true}>
          <ProfileOrders />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}
