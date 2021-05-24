import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./index.module.css";
import IngredientDetails from "../IngredientDetails";
import Scrollbars from "react-custom-scrollbars";

function BurgerIngredients(props: any) {
  const { dataBurger } = props;
  const [current, setCurrent] = React.useState("Булки");
  return (
    <div className="pt-10">
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <div className={`mb-10 ${styles.tab}`}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <Scrollbars
        className={`mb-10 ${styles.ingrediants}`}
        renderThumbVertical={(props) => (
          <div {...props} className="thumb-vertical" />
        )}
        renderTrackVertical={(props) => (
          <div {...props} className="track-vertical" />
        )}
        renderThumbHorizontal={(props) => (
          <div {...props} className="thumb-horizontal" />
        )}
        renderTrackHorizontal={(props) => (
          <div {...props} className="track-horizontal" />
        )}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <h2 className="text text_type_main-medium pb-6">Булки</h2>
        <ul className={styles.list}>
          {dataBurger.map((elem: any) => {
            return (
              <li key={elem.id} className={`pr-3 pl-3 pb-10 ${styles.item}`}>
                <IngredientDetails ingredient={elem} />
              </li>
            );
          })}
        </ul>
      </Scrollbars>
    </div>
  );
}

export default BurgerIngredients;
