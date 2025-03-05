import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";
import {allActionCreators} from "../store/reducers/action-creators";
import {bindActionCreators} from "redux";

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();
    return bindActionCreators(allActionCreators, dispatch);
}