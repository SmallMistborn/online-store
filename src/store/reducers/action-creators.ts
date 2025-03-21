import {AuthActionCreators} from "./auth/action-creators";
import {CartActionCreators} from "@/store/reducers/cart/action-creators";

export const allActionCreators = {
    ...AuthActionCreators,
...CartActionCreators
}