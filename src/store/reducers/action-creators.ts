import {AuthActionCreators} from "./auth/action-creators";
import {CartActionCreators} from "@/store/reducers/cart/action-creators";
// import {EventActionCreators} from "./event/action-creators.ts";


export const allActionCreators = {
    ...AuthActionCreators,
...CartActionCreators
}