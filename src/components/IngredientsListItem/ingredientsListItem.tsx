import React, { useRef } from "react";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./index.module.css";
import { useDrag, useDrop } from "react-dnd";
import { TIngredient } from "../../services/types";

const ItemTypes = {
  CARD: "card",
};

interface TProps {
  handleClose: (item: TIngredient) => void;
  id?: string;
  index: number;
  itemIngredient: TIngredient;
  moveIngredient: (dragIndex: number, hoverIndex: number) => void;
}

export const IngredientsListItem = (props: TProps) => {
  const { itemIngredient, index, handleClose, id, moveIngredient } = props;
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      // @ts-ignore: Unreachable code error
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset: any = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveIngredient(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;
  drag(drop(ref));
  return (
    <li
      ref={ref}
      className={styles["ingredients-item"]}
      data-handler-id={handlerId}
      style={{ opacity }}
    >
      <div className={`mr-1 ${styles["ingredients-drag"]}`}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={itemIngredient.name}
        price={itemIngredient.price}
        thumbnail={itemIngredient.image}
        handleClose={() => handleClose(itemIngredient)}
      />
    </li>
  );
};
