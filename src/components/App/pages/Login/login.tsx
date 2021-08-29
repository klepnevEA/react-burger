import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginRequest, tokenRefrech } from "../../../../services/actions";
import { RootState } from "../../../../services/reducers";
import styles from "./index.module.css";

function Login() {
  const history = useHistory();
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });

  const { isLoginSuccess } = useSelector(
    (state: RootState) => state.loginReducer
  );

  const { refreshToken } = useSelector(
    (state: RootState) => state.registerReducer
  );

  const handleClickNav = useCallback(
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

  useEffect(() => {
    if (isLoginSuccess) {
      history.replace({ pathname: `/` });

      dispatch(tokenRefrech());
    }
  }, [isLoginSuccess]);

  const sendLogin = async (e: Event) => {
    e.preventDefault();
    if (form.password !== "" && form.email !== "") {
      console.log(form);
      await dispatch(loginRequest(form));
      if (isLoginSuccess) {
        history.replace({ pathname: `/` });
      }
      setForm({ ...form, email: "", password: "" });
    }
  };
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
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              value={form.email}
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
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              value={form.password}
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

export default Login;
