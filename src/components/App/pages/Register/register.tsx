import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import { getAuthUser, sendRegisterRequest } from "../../../../services/actions";
import { RootState } from "../../../../services/reducers";
import { Loader } from "../../../Loader";
import styles from "./index.module.css";
import { TUser } from "../../../../services/types";

export function Register() {
  const history = useHistory();
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const [form, setForm] = useState<TUser>({
    email: "",
    password: "",
    name: "",
  });
  const [isLoginSuccess, setIsLoginSuccess] = useState<boolean>(false);

  const { isRegisterSuccess, registerLoader } = useSelector(
    (state: RootState) => state.registerReducer
  );

  const handleClick = useCallback(
    (text: string) => {
      history.replace({ pathname: `/${text}` });
    },
    [history]
  );

  useEffect(() => {
    getAuthUser().then((res) => {
      setIsLoginSuccess(res.success);
    });

    if (isLoginSuccess) {
      history.replace({ pathname: `/` });
    }
  }, [history, isLoginSuccess]);

  if (registerLoader === false && isRegisterSuccess === true) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Redirect to={from} />;
  }

  const sendRegister = async (e: Event) => {
    e.preventDefault();
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (form.name !== "" && form.password !== "" && form.email !== "") {
      if (re.test(String(form.email).toLowerCase())) {
        await dispatch(sendRegisterRequest(form));
        setForm({ ...form, email: "", password: "", name: "" });
      }
    }
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginBox}>
        <form className={styles.loginForm}>
          {`${registerLoader}`}
          {`${isRegisterSuccess}`}
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
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              value={form?.name}
              ref={inputEl}
            />
          </div>
          <div className="mb-6">
            <Input
              type={"text"}
              placeholder={"E-mail"}
              name={"email"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
              icon={"EditIconn"}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              value={form?.email}
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
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              value={form?.password}
            />
          </div>
          <div className="mb-20">
            <Button
              type="primary"
              size="medium"
              onClick={(e: Event) => sendRegister(e)}
            >
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
      {registerLoader && (
        <div className={styles.loginLoader}>
          <Loader />
        </div>
      )}
    </div>
  );
}
