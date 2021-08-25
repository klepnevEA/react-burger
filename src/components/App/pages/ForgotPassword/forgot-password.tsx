import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { sendEmailRequest } from "../../../../services/actions";
import { RootState } from "../../../../services/reducers";
import Loader from "../../../Loader";
import styles from "./index.module.css";

function ForgotPassword() {
  const history = useHistory();
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const { mailLoader } = useSelector(
    (state: RootState) => state.sendMailReducer
  );

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

  const sendEmail = async (e: Event) => {
    e.preventDefault();
    if (value !== "") {
      await dispatch(sendEmailRequest(value));
      history.replace({ pathname: `/reset-password` });
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginBox}>
        <div className={styles.loginForm}>
          <h1 className="text text_type_main-medium mb-6">
            Восстановление пароля
          </h1>
          <div className="mb-6">
            <Input
              type={"text"}
              placeholder={"Укажите e-mail"}
              name={"mail"}
              onChange={(e) => setValue(e.target.value)}
              value={value}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
              ref={inputEl}
            />
          </div>
          <div className="mb-20">
            <Button
              type="primary"
              size="medium"
              onClick={(e: Event) => sendEmail(e)}
            >
              Восстановить
            </Button>
          </div>
        </div>
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
      {mailLoader && (
        <div className={styles.loginLoader}>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
