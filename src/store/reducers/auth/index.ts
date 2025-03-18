import { AuthActionEnum, AuthState, AuthAction } from "./types";
import { IUser } from "@/models/IUser";

const initialState: AuthState = {
  isAuth: false,
  error: "",
  user: {} as IUser,
};

export default function authReducer(
  state = initialState,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActionEnum.SET_ERROR:
      return { ...state, error: action.payload };
    case AuthActionEnum.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
