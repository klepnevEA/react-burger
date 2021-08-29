import React from "react";
import styles from "./index.module.css";
import { Link, NavLink } from "react-router-dom";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../services/reducers";
import { logoutRequest } from "../../../../services/actions";

function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.registerReducer);
  console.log(user);
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
              to={{ pathname: `/profile/orders/:id` }}
              className={styles.profileLink}
              exact
              activeStyle={{
                color: "var(--text-primary-color)",
              }}
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
      <div className={styles.profileForm}>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Имя"}
            name={"mail"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            icon={"EditIcon"}
            value={user.name}
          />
        </div>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Логин"}
            name={"mail"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            icon={"EditIcon"}
            value={user.email}
          />
        </div>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Пароль"}
            name={"mail"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            icon={"EditIcon"}
          />
        </div>
        <div className={styles.profileButtons}>
          <Button type="secondary" size="medium">
            Отмена
          </Button>
          <Button type="primary" size="medium">
            Сохранить
          </Button>
          <div className="ml-2">
            <Button type="primary" size="medium" onClick={logout}>
              Выйти
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
