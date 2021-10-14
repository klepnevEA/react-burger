import {
  ORDER_DATAILS_CLOSE,
  SET_ORDER,
  SET_ORDER_FAILED,
  SET_ORDER_SUCCESS,
} from "../actions/orderDetails";
import { orderDetailsReducer } from "./orderDetails";

const initialState = {
  isOpenOrder: false,
  orderLoader: false,
  orderNumber: 0,
  orderName: "",
};

describe("order detals reducer", () => {
  it("should handle SET_ORDER", () => {
    expect(
      orderDetailsReducer(initialState, {
        type: SET_ORDER,
      })
    ).toEqual(
      expect.objectContaining({
        orderLoader: true,
      })
    );
  });

  it("should handle SET_ORDER_SUCCESS", () => {
    expect(
      orderDetailsReducer(initialState, {
        type: SET_ORDER_SUCCESS,
        orderLoader: false,
        isOpenOrder: true,
        orderNumber: 123,
        orderName: "Name",
        numberOrder: "123",
      })
    ).toEqual(
      expect.objectContaining({
        isOpenOrder: true,
        orderLoader: false,
        orderName: "Name",
        orderNumber: "123",
      })
    );
  });

  it("should handle SET_ORDER_FAILED", () => {
    expect(
      orderDetailsReducer(initialState, {
        type: SET_ORDER_FAILED,
        orderLoader: false,
        orderNumber: 0,
        orderName: "Заказ",
        isOpenOrder: true,
      })
    ).toEqual(
      expect.objectContaining({
        orderLoader: false,
        orderNumber: 0,
        orderName: "Заказ",
        isOpenOrder: true,
      })
    );
  });

  it("should handle ORDER_DATAILS_CLOSE", () => {
    expect(
      orderDetailsReducer(initialState, {
        type: ORDER_DATAILS_CLOSE,
        isOpenOrder: false,
        orderNumber: 0,
        orderName: "",
      })
    ).toEqual(
      expect.objectContaining({
        isOpenOrder: false,
        orderNumber: 0,
        orderName: "",
      })
    );
  });
});
