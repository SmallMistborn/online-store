import { AppDispatch } from "@/store";
import {
    CartActionEnum,
    AddItemAction,
    ClearCartAction,
    DecreaseQuantityAction,
    IncreaseQuantityAction,
    RemoveItemAction,
    SetErrorAction, CartState, SetUserAction, LoadCartAction,
} from "@/store/reducers/cart/types";
import { ICartItem } from "@/models/ICart";

export const CartActionCreators = {
    setUser: (userId: string | null) => (dispatch: AppDispatch) => {
        const action: SetUserAction = {
            type: CartActionEnum.SET_USER,
            payload: userId,
        };
        dispatch(action);
        if (userId) {
            const cart = localStorage.getItem(`cart_${userId}`);
            if (cart) {
                const parsedCart: CartState = JSON.parse(cart);
                dispatch(CartActionCreators.loadCart(parsedCart));
            }
        }
    },
    loadCart: (cart: CartState) => (dispatch: AppDispatch) => {
        const action: LoadCartAction = {
            type: CartActionEnum.LOAD_CART,
            payload: cart,
        };
        dispatch(action);
    },
    addItemToCart: (item: ICartItem) => (dispatch: AppDispatch, getState: () => CartState) => {
        const state = getState();
        const updatedProducts = { ...state.products };
        const existingProduct = updatedProducts[item.product.id];

        if (existingProduct) {
            updatedProducts[item.product.id] = {
                ...existingProduct,
                quantity: existingProduct.quantity + 1,
            };
        } else {
            updatedProducts[item.product.id] = { ...item, quantity: 1 };
        }

        const action: AddItemAction = {
            type: CartActionEnum.ADD_ITEM,
            payload: item,
        };

        dispatch(action);
    },

    removeItemFromCart: (productId: number) => (dispatch: AppDispatch) => {
        const action: RemoveItemAction = {
            type: CartActionEnum.REMOVE_ITEM,
            payload: productId,
        };
        dispatch(action);
    },

    clearCart: () => (dispatch: AppDispatch) => {
        const action: ClearCartAction = {
            type: CartActionEnum.CLEAR_CART,
        };
        dispatch(action);
    },

    increaseQuantity: (productId: number) => (dispatch: AppDispatch) => {
        const action: IncreaseQuantityAction = {
            type: CartActionEnum.INCREASE_QUANTITY,
            payload: productId,
        };
        dispatch(action);
    },

    decreaseQuantity: (productId: number) => (dispatch: AppDispatch) => {
        const action: DecreaseQuantityAction = {
            type: CartActionEnum.DECREASE_QUANTITY,
            payload: productId,
        };
        dispatch(action);
    },

    setError: (errorMessage: string) => (dispatch: AppDispatch) => {
        const action: SetErrorAction = {
            type: CartActionEnum.SET_ERROR,
            payload: errorMessage,
        };
        dispatch(action);
    },
};

    // export function removeItemFromCart(state: CartState, productId: number): CartState {
    //     const updatedProducts = {...state.products};
    //     const productToRemove = updatedProducts[productId];
    //
    //     if (!productToRemove) {
    //         return state;
    //     }
    //
    //     const updatedTotalQuantity = state.totalQuantity - productToRemove.quantity;
    //     const updatedTotalPrice = state.totalPrice - productToRemove.product.price * productToRemove.quantity;
    //
    //     delete updatedProducts[productId];
    //
    //     return {
    //         ...state,
    //         products: updatedProducts,
    //         isEmpty: Object.keys(updatedProducts).length === 0,
    //         totalQuantity: updatedTotalQuantity,
    //         totalPrice: updatedTotalPrice,
    //     };
    // }
    //
    // export function clearCart(state: CartState): CartState {
    //     return {
    //         isEmpty: true,
    //         products: {},
    //         totalPrice: 0,
    //         totalQuantity: 0,
    //         user: null,
    //         error: "",
    //     };
    // }
    //
    // export function increaseQuantity(state: CartState, productId: number): CartState {
    //     const updatedProducts = {...state.products};
    //     const existingProduct = updatedProducts[productId];
    //
    //     if (!existingProduct) {
    //         return state;
    //     }
    //
    //     existingProduct.quantity += 1;
    //
    //     return {
    //         ...state,
    //         products: updatedProducts,
    //         totalQuantity: state.totalQuantity + 1,
    //         totalPrice: state.totalPrice + existingProduct.product.price,
    //     };
    // }
    //
    // export function decreaseQuantity(state: CartState, productId: number): CartState {
    //     const updatedProducts = {...state.products};
    //     const existingProduct = updatedProducts[productId];
    //
    //     if (!existingProduct || existingProduct.quantity <= 1) {
    //         return state;
    //     }
    //
    //     existingProduct.quantity -= 1;
    //
    //     return {
    //         ...state,
    //         products: updatedProducts,
    //         totalQuantity: state.totalQuantity - 1,
    //         totalPrice: state.totalPrice - existingProduct.product.price,
    //     };
    // }
    // export function setError(state: CartState, errorMessage: string): CartState {
    //     return {
    //         ...state,
    //         error: errorMessage,
    //     };
    // }
