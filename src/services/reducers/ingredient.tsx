// список всех полученных ингредиентов

const ingredientReducerState = {
  list: [],
  name: "",
  type: "",
};

export const ingredientReducer = (
  state = ingredientReducerState,
  action: any
) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
