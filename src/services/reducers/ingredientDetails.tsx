// объект текущего просматриваемого ингредиента

const ingredientDetailsState = {
  ingredient: "",
};

export const ingredientDetailsReducer = (
  state = ingredientDetailsState,
  action: any
) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
