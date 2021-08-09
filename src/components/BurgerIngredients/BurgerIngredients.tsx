import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./index.module.css";
import Scrollbars from "react-custom-scrollbars";
import IngredientList from "../IngredientList";
import { TDataItem } from "../../../src/interface";

interface Props {
  dataBurger: TDataItem[];
  openIngredients: (ingredient: TDataItem) => void;
}

function BurgerIngredients(props: Props) {
  const { dataBurger, openIngredients } = props;
  const [current, setCurrent] = React.useState("Булки");
  const ingredients = {
    bun: { type: "bun", name: "Булки", list: [] },
    sauce: { type: "sauce", name: "Соусы", list: [] },
    main: { type: "main", name: "Мясо", list: [] },
  };

  for (let i = 0; i < dataBurger.length; i++) {
    if (dataBurger[i].type === "bun") {
      ingredients.bun.list.push(dataBurger[i] as never);
    }
    if (dataBurger[i].type === "main") {
      ingredients.main.list.push(dataBurger[i] as never);
    }
    if (dataBurger[i].type === "sauce") {
      ingredients.sauce.list.push(dataBurger[i] as never);
    }
  }

  return (
    <div className="pt-10">
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <ul className={`mb-10 ${styles.tab}`}>
        <li className={styles.tabItem}>
          <Tab value="one" active={current === "one"} onClick={setCurrent}>
            Булки
          </Tab>
        </li>
        <li className={styles.tabItem}>
          <Tab value="two" active={current === "two"} onClick={setCurrent}>
            Соусы
          </Tab>
        </li>
        <li className={styles.tabItem}>
          <Tab value="three" active={current === "three"} onClick={setCurrent}>
            Начинки
          </Tab>
        </li>
      </ul>
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
        {Object.entries(ingredients).map(([key, value]) => {
          return (
            <IngredientList
              key={key}
              ingredients={value}
              openIngredients={openIngredients}
            />
          );
        })}
      </Scrollbars>
    </div>
  );
}

export default BurgerIngredients;
