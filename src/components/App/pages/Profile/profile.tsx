import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.profileAside}>
        <ul className={styles.profileNav}>
          <li className={styles.profileItem}>
            <Link to={{ pathname: `/` }} className={styles.profileLink}>
              <span className="text text_type_main-medium">Профиль</span>
            </Link>
          </li>
          <li className={styles.profileItem}>
            <Link to={{ pathname: `/` }} className={styles.profileLink}>
              <span className="text text_type_main-medium">
                История заказов
              </span>
            </Link>
          </li>
          <li className={styles.profileItem}>
            <Link to={{ pathname: `/` }} className={styles.profileLink}>
              <span className="text text_type_main-medium">Выход</span>
            </Link>
          </li>
        </ul>
        <div className={styles.subText}>
          <div className="text text_type_main-default mt-30">
            В этом разделе вы можете
            <br /> изменить свои персональные данные
          </div>
        </div>
      </div>
      <div className={styles.profileForm}>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Имя"}
            name={"mail"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            icon={"EditIcon"}
          />
        </div>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Логин"}
            name={"mail"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            icon={"EditIcon"}
          />
        </div>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Имя"}
            name={"mail"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            icon={"EditIcon"}
          />
        </div>
        <div className={styles.profileButtons}>
          <Button type="secondary" size="medium">
            Отмена
          </Button>
          <Button type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
