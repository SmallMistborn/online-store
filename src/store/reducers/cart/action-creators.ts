import {AppDispatch, RootState} from "@/store";
import {
    CartActionEnum,
    AddItemAction,
    ClearCartAction,
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

    increaseQuantity: (productId: number) => (dispatch: AppDispatch, getState: () => RootState) => {
        const state = getState().cart;
        console.log(state);

        if (!state.products) {
            console.error("Ошибка: state.products не определён.");
            return;
        }

        const existingProduct = state.products[productId];

        if (!existingProduct) {
            console.error(`Ошибка: Продукт с ID ${productId} не найден.`);
            return;
        }

        const maxQuantity = existingProduct.product.amount;
        if (existingProduct.quantity + 1 > maxQuantity) {
            dispatch(CartActionCreators.setError(`Нельзя добавить больше ${maxQuantity} единиц этого товара.`));
            return;
        }

        dispatch({
            type: CartActionEnum.INCREASE_QUANTITY,
            payload: productId,
        });
    },

    decreaseQuantity: (productId: number) => (dispatch: AppDispatch, getState: () => RootState) => {
        const state = getState().cart;

        if (!state.products) {
            console.error("Ошибка: state.products не определён.");
            return;
        }

        const product = state.products[productId];

        if (!product) {
            console.error(`Ошибка: Продукт с ID ${productId} не найден.`);
            return;
        }

        if (product.quantity === 1) {
            dispatch(CartActionCreators.removeItemFromCart(productId));
        } else {
            dispatch({
                type: CartActionEnum.DECREASE_QUANTITY,
                payload: productId,
            });
        }
    },

    setError: (errorMessage: string) => (dispatch: AppDispatch) => {
        const action: SetErrorAction = {
            type: CartActionEnum.SET_ERROR,
            payload: errorMessage,
        };
        dispatch(action);
    },
};


