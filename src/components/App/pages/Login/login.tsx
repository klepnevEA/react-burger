import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.module.css";

function Login() {
  const history = useHistory();
  const handleClick = useCallback(
    (text: string) => {
      history.replace({ pathname: `/${text}` });
    },
    [history]
  );
  return (
    <div className={styles.login}>
      <div className={styles.loginBox}>
        <form className={styles.loginForm}>
          <h1 className="text text_type_main-medium mb-6">Вход</h1>
          <div className="mb-6">
            <Input
              type={"text"}
              placeholder={"E-mail"}
              name={"mail"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
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
            />
          </div>
          <div className="mb-20">
            <Button type="primary" size="medium">
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
                handleClick("register");
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
                handleClick("forgot-password");
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

export default Login;
