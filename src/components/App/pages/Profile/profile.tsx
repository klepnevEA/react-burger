import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { NavLink, useHistory } from "react-router-dom";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuthUser,
  logoutRequest,
  sendUpdateUserRequest,
} from "../../../../services/actions";
import { RootState } from "../../../../services/reducers";

export function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({ email: "", name: "", password: "" });

  useEffect(() => {
    getAuthUser().then((res) => {
      if (res.success) {
        setUser(res.user);
      }
    });
  }, []);

  const logout = () => {
    dispatch(logoutRequest());
    // history.replace({ pathname: `/login` });
  };

  const resetUser = () => {
    getAuthUser().then((res) => {
      if (res.success) {
        setUser(res.user);
      }
    });
  };

  const updateUser = async () => {
    if (user.password !== "" && user.email !== "" && user.name !== "") {
      await dispatch(sendUpdateUserRequest(user));
    }
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
      <div className={styles.profileForm}>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Имя"}
            name={"name"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            icon={"EditIcon"}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={user.name}
          />
        </div>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Логин"}
            name={"email"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            icon={"EditIcon"}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={user.email}
          />
        </div>
        <div className="mb-6">
          <Input
            type={"password"}
            placeholder={"Пароль"}
            name={"password"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            icon={"EditIcon"}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            value={user.password}
          />
        </div>
        <div className={styles.profileButtons}>
          <Button type="secondary" size="medium" onClick={resetUser}>
            Отмена
          </Button>
          <Button type="primary" size="medium" onClick={updateUser}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
}
