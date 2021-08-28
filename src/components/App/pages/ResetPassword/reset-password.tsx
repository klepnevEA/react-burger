import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetPasswordRequest } from "../../../../services/actions";
import { RootState } from "../../../../services/reducers";
import Loader from "../../../Loader";
import styles from "./index.module.css";

function ResetPassword() {
  const history = useHistory();
  const inputPassword = useRef(null);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ code: "", password: "" });

  const handleClick = useCallback(
    (text: string) => {
      history.replace({ pathname: `/${text}` });
    },
    [history]
  );

  const { resetLoader } = useSelector(
    (state: RootState) => state.resetPassword
  );

  useEffect(() => {
    if (inputPassword) {
      inputPassword.current.focus();
    }
  }, []);

  const resetRassord = async (e: Event) => {
    e.preventDefault();

    if (form.code !== "" && form.password !== "") {
      await dispatch(resetPasswordRequest(form));
      setForm({ code: "", password: "" });
    }
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
              type={"password"}
              placeholder={"Введите новый пароль"}
              name={"password"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
              icon={"ShowIcon"}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              value={form.password}
              ref={inputPassword}
            />
          </div>
          <div className="mb-6">
            <Input
              type={"text"}
              placeholder={"Введите код из письма"}
              name={"code"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              value={form.code}
            />
          </div>
          <div className="mb-20">
            <Button
              type="primary"
              size="medium"
              onClick={(e: Event) => resetRassord(e)}
            >
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
      {resetLoader && (
        <div className={styles.loginLoader}>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
