// список всех ингредиентов в текущем конструкторе бургера

const ingredientBurgerReducerState = {
  dataBurger: [],
};

export const ingredientBurgerReducer = (
  state = ingredientBurgerReducerState,
  action: any
) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
