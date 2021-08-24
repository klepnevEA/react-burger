import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.module.css";

function Register() {
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
          <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
          <div className="mb-6">
            <Input
              type={"text"}
              placeholder={"Имя"}
              name={"name"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
              icon={"EditIconn"}
            />
          </div>
          <div className="mb-6">
            <Input
              type={"text"}
              placeholder={"E-mail"}
              name={"mail"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
              icon={"EditIconn"}
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
              icon={"EditIconn"}
            />
          </div>
          <div className="mb-20">
            <Button type="primary" size="medium">
              Зарегистрироваться
            </Button>
          </div>
        </form>
        <div>
          <p className="text">
            Уже зарегистрированы?
            <Button
              type="secondary"
              size="small"
              onClick={() => {
                handleClick("login");
              }}
            >
              Войти
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
