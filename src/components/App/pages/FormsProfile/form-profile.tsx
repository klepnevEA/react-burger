import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import {
  getAuthUser,
  sendUpdateUserRequest,
} from "../../../../services/actions";

export function FormProfile() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", name: "", password: "" });

  useEffect(() => {
    getAuthUser().then((res) => {
      if (res.success) {
        setUser(res.user);
      }
    });
  }, []);

  const resetUser = () => {
    getAuthUser().then((res) => {
      if (res.success) {
        setUser(res.user);
      }
    });
  };

  const updateUser = async () => {
    if (user?.password !== "" && user?.email !== "" && user?.name !== "") {
      await dispatch(sendUpdateUserRequest(user));
    }
  };

  return (
    <div className={styles.profileForm}>
      <div className="mb-6">
        <Input
          type={"text"}
          placeholder={"Имя"}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          icon={"EditIcon"}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target?.value })
          }
          value={user?.name || ""}
        />
      </div>
      <div className="mb-6">
        <Input
          type={"text"}
          placeholder={"Логин"}
          name={"email"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          icon={"EditIcon"}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target?.value })
          }
          value={user?.email || ""}
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
          icon={"EditIcon"}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target?.value })
          }
          value={user?.password || ""}
        />
      </div>
      <div className={styles.profileButtons}>
        <Button type="secondary" size="medium" onClick={resetUser}>
          Отмена
        </Button>
        <Button type="primary" size="medium" onClick={updateUser}>
          Сохранить
        </Button>
      </div>
    </div>
  );
}
