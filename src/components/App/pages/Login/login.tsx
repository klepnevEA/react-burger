import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { loginRequest } from "../../../../services/actions";
import styles from "./index.module.css";
import { RootState } from "../../../../services/reducers";

export function Login() {
  const history = useHistory();
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useSelector((state: RootState) => state.loginReducer);
  const [formUser, setForm] = useState({ email: "", password: "" });

  const handleClickNav = useCallback(
    (text: string) => {
      history.replace({ pathname: `/${text}` });
    },
    [history]
  );

  const sendLogin = async (e: Event) => {
    e.preventDefault();
    if (formUser.password !== "" && formUser.email !== "") {
      dispatch(loginRequest(formUser));
    }
  };

  if (user.name) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Redirect to={from} />;
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginBox}>
        <form className={styles.loginForm}>
          <h1 className="text text_type_main-medium mb-6">Вход</h1>
          <div className="mb-6">
            <Input
              type={"text"}
              placeholder={"E-mail"}
              name={"email"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
              ref={inputEl}
              onChange={(e) =>
                setForm({ ...formUser, [e.target.name]: e.target.value })
              }
              value={formUser.email}
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
              icon={"ShowIcon"}
              onChange={(e) =>
                setForm({ ...formUser, [e.target.name]: e.target.value })
              }
              value={formUser.password}
            />
          </div>
          <div className="mb-20">
            <Button
              type="primary"
              size="medium"
              onClick={(e: Event) => {
                sendLogin(e);
              }}
            >
              Войти
            </Button>
          </div>
        </form>
        <div>
          <p className="text">
            Вы — новый пользователь?
            <Button
              type="secondary"
              size="small"
              onClick={() => {
                handleClickNav("register");
              }}
            >
              Зарегистрироваться
            </Button>
          </p>
        </div>
        <div>
          <p className="text">
            Забыли пароль?
            <Button
              type="secondary"
              size="small"
              onClick={() => {
                handleClickNav("forgot-password");
              }}
            >
              Восстановить пароль
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}
