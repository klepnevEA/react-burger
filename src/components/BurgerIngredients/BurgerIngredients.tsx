import React, { useEffect, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../services/reducers";
import { TDataItem } from "../../interface";
import { IngredientDetails } from "../IngredientDetails";
import { Link, useLocation } from "react-router-dom";

export function BurgerIngredients() {
  const [bunActive, setBunActive] = useState(true);
  const [sauceActive, setSauceActive] = useState(false);
  const [meatActive, setMeatActive] = useState(false);
  const location = useLocation();

  const { ingredients } = useSelector(
    (state: RootState) => state.ingredientList
  );

  const handleClick = () => {
    console.log("Click!");
  };

  const scrollList = (
    container: HTMLElement,
    bun: HTMLElement | null,
    sauce: HTMLElement | null,
    meat: HTMLElement | null
  ) => {
    let containerTop = container?.getBoundingClientRect().top;
    let calcBun = bun ? bun?.getBoundingClientRect().top : 0 - containerTop;
    let calcSauce = sauce
      ? sauce?.getBoundingClientRect().top
      : 0 - containerTop;
    let calcMeat = meat ? meat?.getBoundingClientRect().top : 0 - containerTop;

    if (calcBun >= 0) {
      setBunActive(true);
      setSauceActive(false);
      setMeatActive(false);
    } else if (calcSauce >= 0) {
      setBunActive(false);
      setSauceActive(true);
      setMeatActive(false);
    } else if (calcMeat >= 0) {
      setBunActive(false);
      setSauceActive(false);
      setMeatActive(true);
    }
  };

  useEffect(() => {
    const container = document.getElementById("scrollBlock");
    const bun = document.getElementById("bun");
    const sauce = document.getElementById("sauce");
    const meat = document.getElementById("meat");
    container?.addEventListener("scroll", () => {
      scrollList(container, bun, sauce, meat);
    });
  });

  const ingredientsType = {
    bun: { type: "bun", name: "??????????", list: [] },
    sauce: { type: "sauce", name: "??????????", list: [] },
    meat: { type: "meat", name: "????????", list: [] },
  };

  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i].type === "bun") {
      ingredientsType.bun.list.push(ingredients[i] as never);
    }
    if (ingredients[i].type === "main") {
      ingredientsType.meat.list.push(ingredients[i] as never);
    }
    if (ingredients[i].type === "sauce") {
      ingredientsType.sauce.list.push(ingredients[i] as never);
    }
  }

  return (
    <div className="pt-10">
      <h1 className="text text_type_main-large mb-5">???????????????? ????????????</h1>
      <ul className={`mb-10 ${styles.tab}`}>
        <li className={styles.tabItem}>
          <Tab value="one" active={bunActive} onClick={handleClick}>
            ??????????
          </Tab>
        </li>
        <li className={styles.tabItem}>
          <Tab value="two" active={sauceActive} onClick={handleClick}>
            ??????????
          </Tab>
        </li>
        <li className={styles.tabItem}>
          <Tab value="three" active={meatActive} onClick={handleClick}>
            ??????????????
          </Tab>
        </li>
      </ul>
      <div id="scrollBlock" className={`mb-10 ${styles.ingrediants}`}>
        {Object.entries(ingredientsType).map(([key, value]) => {
          return (
            <div className={styles["ingredient-list"]} key={key}>
              <div className="text text_type_main-medium pb-6" id={value.type}>
                {value.name}
              </div>
              <ul className={styles.list}>
                {value.list.map((elem: TDataItem) => {
                  return (
                    <li
                      key={elem._id}
                      className={`pr-3 pl-3 pb-10 ${styles.item}`}
                    >
                      <Link
                        to={{
                          pathname: `/ingredients/${elem._id}`,
                          state: { background: location },
                        }}
                        className={styles.link}
                      >
                        <IngredientDetails ingredient={elem} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
