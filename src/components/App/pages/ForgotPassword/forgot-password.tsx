import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.module.css";

function ForgotPassword() {
  const history = useHistory();
  const inputEl = useRef(null);

  const handleClick = useCallback(
    (text: string) => {
      history.replace({ pathname: `/${text}` });
    },
    [history]
  );

  useEffect(() => {
    if (inputEl) {
      inputEl.current.focus();
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(inputEl.current.value);
    inputEl.current.value = "";
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginBox}>
        <form className={styles.loginForm}>
          <h1 className="text text_type_main-medium mb-6">
            Восстановление пароля
          </h1>
          <div className="mb-6">
            <Input
              type={"text"}
              placeholder={"Укажите e-mail"}
              name={"mail"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
              ref={inputEl}
              className="input_status_active"
            />
          </div>
          <div className="mb-20">
            <Button type="primary" size="medium" onClick={sendEmail}>
              Восстановить
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

export default ForgotPassword;
