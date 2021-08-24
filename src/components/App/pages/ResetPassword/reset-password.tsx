import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.module.css";

function ResetPassword() {
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
          <h1 className="text text_type_main-medium mb-6">
            Восстановление пароля
          </h1>
          <div className="mb-6">
            <Input
              type={"password"}
              placeholder={"Введите новый пароль"}
              name={"password"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
              icon={"ShowIcon"}
            />
          </div>
          <div className="mb-6">
            <Input
              type={"text"}
              placeholder={"Введите код из письма"}
              name={"password"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <div className="mb-20">
            <Button type="primary" size="medium">
              Сохранить
            </Button>
          </div>
        </form>
        <div>
          <p className="text">
            Вспомнили пароль?
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

export default ResetPassword;
