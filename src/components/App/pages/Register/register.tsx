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

export function Register() {
  const history = useHistory();
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

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
          <h1 className="text text_type_main-medium mb-6">??????????????????????</h1>
          <div className="mb-6">
            <Input
              type={"text"}
              placeholder={"??????"}
              name={"name"}
              error={false}
              errorText={"????????????"}
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
              errorText={"????????????"}
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
              placeholder={"????????????"}
              name={"password"}
              error={false}
              errorText={"????????????"}
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
              ????????????????????????????????????
            </Button>
          </div>
        </form>
        <div>
          <p className="text">
            ?????? ?????????????????????????????????
            <Button
              type="secondary"
              size="small"
              onClick={() => {
                handleClick("login");
              }}
            >
              ??????????
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
