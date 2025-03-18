import { ICartItem } from "@/models/ICart";

export interface CartState {
    isEmpty: boolean;
    products: Record<number, ICartItem>;
    totalPrice: number;
    totalQuantity: number;
    user: string | null;
    error: string;
}

export enum CartActionEnum {
    SET_USER = "SET_USER",
    ADD_ITEM = "ADD_ITEM",
    REMOVE_ITEM = "REMOVE_ITEM",
    CLEAR_CART = "CLEAR_CART",
    INCREASE_QUANTITY = "INCREASE_QUANTITY",
    DECREASE_QUANTITY = "DECREASE_QUANTITY",
    LOAD_CART = "LOAD_CART",
    SET_ERROR = "SET_ERROR",
}

export interface SetUserAction {
    type: CartActionEnum.SET_USER;
    payload: string | null;
}

export interface AddItemAction {
    type: CartActionEnum.ADD_ITEM;
    payload: ICartItem;
}

export interface RemoveItemAction {
    type: CartActionEnum.REMOVE_ITEM;
    payload: number;
}

export interface ClearCartAction {
    type: CartActionEnum.CLEAR_CART;
}

export interface IncreaseQuantityAction {
    type: CartActionEnum.INCREASE_QUANTITY;
    payload: number;
}

export interface DecreaseQuantityAction {
    type: CartActionEnum.DECREASE_QUANTITY;
    payload: number;
}

export interface LoadCartAction {
    type: CartActionEnum.LOAD_CART;
    payload: CartState;
}

export interface SetErrorAction {
    type: CartActionEnum.SET_ERROR;
    payload: string;
}

export type CartAction =
    | SetUserAction
    | AddItemAction
    | RemoveItemAction
    | ClearCartAction
    | IncreaseQuantityAction
    | DecreaseQuantityAction
    | SetErrorAction
    | LoadCartAction;