// список всех ингредиентов в текущем конструкторе бургера

const ingredientConstructorBurgerReducerState = {
  ingredientsConstructor: [],
};

export const ingredientConstructorBurgerReducer = (
  state = ingredientConstructorBurgerReducerState,
  action: any
) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
