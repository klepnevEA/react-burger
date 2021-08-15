// объект созданного заказа

import {
  ORDER_DATAILS_CLOSE,
  SET_ORDER,
  SET_ORDER_FAILED,
  SET_ORDER_SUCCESS,
} from "../actions";

const orderDetailsState = {
  isOpenOrder: false,
  orderLoader: false,
  orderNumber: 0,
  orderName: "",
};

export const orderDetailsReducer = (state = orderDetailsState, action: any) => {
  switch (action.type) {
    case SET_ORDER: {
      return {
        ...state,
        orderLoader: true,
      };
    }

    case SET_ORDER_SUCCESS: {
      return {
        ...state,
        orderLoader: false,
        isOpenOrder: true,
        orderNumber: action.numberOrder,
        orderName: action.orderName,
      };
    }

    case SET_ORDER_FAILED: {
      return {
        ...state,
        orderLoader: false,
        orderNumber: 0,
        orderName: action.orderName,
        isOpenOrder: true,
      };
    }

    case ORDER_DATAILS_CLOSE: {
      return {
        ...state,
        isOpenOrder: false,
        orderNumber: 0,
        orderName: "",
      };
    }
    default: {
      return state;
    }
  }
};
