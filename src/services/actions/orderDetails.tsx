export const SET_ORDER: "SET_ORDER" = "SET_ORDER";
export const SET_ORDER_SUCCESS: "SET_ORDER_SUCCESS" = "SET_ORDER_SUCCESS";
export const SET_ORDER_FAILED: "SET_ORDER_FAILED" = "SET_ORDER_FAILED";
export const ORDER_DATAILS_CLOSE: "ORDER_DATAILS_CLOSE" = "ORDER_DATAILS_CLOSE";

// export interface TUser {
//   email: string;
//   name: string;
// }

export interface ISetOrder {
  readonly type: typeof SET_ORDER;
}

export interface ISetOrderSuccess {
  readonly type: typeof SET_ORDER_SUCCESS;
  numberOrder: string;
  orderName: string;
  orderLoader: boolean;
  isOpenOrder: boolean;
  orderNumber: number;
}

export interface ISetOrderFailed {
  readonly type: typeof SET_ORDER_FAILED;
  orderName: string;
  orderLoader: boolean;
  orderNumber: number;
  isOpenOrder: boolean;
}

export interface IOrderCloseDetals {
  readonly type: typeof ORDER_DATAILS_CLOSE;
  isOpenOrder: boolean;
  orderNumber: number;
  orderName: string;
}
export type TActions =
  | ISetOrder
  | ISetOrderSuccess
  | ISetOrderFailed
  | IOrderCloseDetals;
