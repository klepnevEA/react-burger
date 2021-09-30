import { SET_ORDER, SET_ORDER_SUCCESS } from "../actions/orderDetails";
import { orderDetailsReducer } from "./orderDetails";

const initialState = {
  isOpenOrder: false,
  orderLoader: false,
  orderNumber: 0,
  orderName: "",
};

describe("order detals reducer", () => {
  it("should return the initial state", () => {
    expect(orderDetailsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle LOGIN loader", () => {
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
      })
    ).toEqual(
      expect.objectContaining({
        orderLoader: false,
        isOpenOrder: true,
        orderNumber: 123,
        orderName: "Name",
      })
    );
  });
});
