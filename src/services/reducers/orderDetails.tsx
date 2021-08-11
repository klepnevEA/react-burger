// объект созданного заказа

import { ORDER_DATAILS_CLOSE, ORDER_DATAILS_OPEN } from "../actions";

const orderDetailsState = {
  isOpenOrder: false,
  order: 0,
};

export const orderDetailsReducer = (state = orderDetailsState, action: any) => {
  switch (action.type) {
    case ORDER_DATAILS_OPEN: {
      return {
        ...state,
        isOpenOrder: true,
        order: state.order + 1,
      };
    }
    case ORDER_DATAILS_CLOSE: {
      return {
        ...state,
        isOpenOrder: false,
      };
    }
    default: {
      return state;
    }
  }
};
