import { CartActionEnum, CartState, CartAction } from "./types";

const initialState: CartState = {
    isEmpty: true,
    products: {},
    totalPrice: 0,
    totalQuantity: 0,
    user: null,
    error: "",
};

export default function cartReducer(
    state = initialState,
    action: CartAction
): CartState {
    let newState;

    switch (action.type) {
        case CartActionEnum.SET_USER: {
            newState = {
                ...state,
                user: action.payload,
            };
            break;
        }

        case CartActionEnum.ADD_ITEM: {
            const item = action.payload;
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

            newState = {
                ...state,
                products: updatedProducts,
                isEmpty: false,
                totalQuantity: state.totalQuantity + 1,
                totalPrice: state.totalPrice + item.product.price,
            };
            break;
        }

        case CartActionEnum.REMOVE_ITEM: {
            const { [action.payload]: productToRemove, ...updatedProducts } = state.products;

            if (!productToRemove) return state;

            return {
                ...state,
                products: updatedProducts,
                isEmpty: Object.keys(updatedProducts).length === 0,
                totalQuantity: state.totalQuantity - productToRemove.quantity,
                totalPrice: state.totalPrice - productToRemove.product.price * productToRemove.quantity,
            };
        }

        case CartActionEnum.CLEAR_CART: {
            newState = {
                ...initialState,
            };
            break;
        }

        case CartActionEnum.INCREASE_QUANTITY: {
            const productId = action.payload;
            const updatedProducts = { ...state.products };
            const existingProduct = updatedProducts[productId];

            if (!existingProduct) {
                return state;
            }

            existingProduct.quantity += 1;

            newState = {
                ...state,
                products: updatedProducts,
                totalQuantity: state.totalQuantity + 1,
                totalPrice: state.totalPrice + existingProduct.product.price,
            };
            break;
        }

        case CartActionEnum.DECREASE_QUANTITY: {
            const productId = action.payload;
            const updatedProducts = { ...state.products };
            const existingProduct = updatedProducts[productId];

            if (!existingProduct || existingProduct.quantity <= 1) {
                return state;
            }

            existingProduct.quantity -= 1;

            newState = {
                ...state,
                products: updatedProducts,
                totalQuantity: state.totalQuantity - 1,
                totalPrice: state.totalPrice - existingProduct.product.price,
            };
            break;
        }
        case CartActionEnum.LOAD_CART: {
            return action.payload;
        }

        case CartActionEnum.SET_ERROR: {
            newState = {
                ...state,
                error: action.payload,
            };
            break;
        }

        default:
            return state;
    }


    if (newState.user) {
        localStorage.setItem(`cart_${newState.user}`, JSON.stringify(newState));
    }

    return newState;
}