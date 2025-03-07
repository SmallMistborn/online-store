import {
  AuthActionEnum,
  SetAuthAction,
  SetUserAction,
  SetErrorAction,
} from "./types";
import { IUser } from "@/models/IUser";
import { AppDispatch } from "@/store";
import UserService from "@/api/UserService";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),

  setError: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        const response = await UserService.getUsers();
        const mockUser = response.data.find(
          (user) => user.login === username && user.password === password,
        );
        if (mockUser) {
          localStorage.setItem("auth", "true");
          localStorage.setItem("login", mockUser.login);
          dispatch(AuthActionCreators.setUser(mockUser));
          dispatch(AuthActionCreators.setIsAuth(true));
          AuthActionCreators.setError("");
        } else {
          dispatch(
            AuthActionCreators.setError("Некорректный логин или пароль"),
          );
        }
      } catch (err) {
        dispatch(AuthActionCreators.setError("Произошла ошибка при логине"));
      }
    },
  logout: () => (dispatch: AppDispatch) => {

      localStorage.removeItem("auth");
      localStorage.removeItem("login");
      dispatch(AuthActionCreators.setUser({} as IUser));
      dispatch(AuthActionCreators.setIsAuth(false));

  },
  register:
      (login: string, password: string, confirmPassword: string) => async (dispatch: AppDispatch) => {
        try {

          const response = await UserService.getUsers();
          const users = response.data;

          const userExists = users.some((user) => user.login === login);
          if (userExists) {
            dispatch(AuthActionCreators.setError("Пользователь уже существует"));
            return;
          }

          if (password !== confirmPassword) {
            dispatch(AuthActionCreators.setError("Пароли не совпадают"));
            return;
          }


          const newUser: IUser = {
            login,
            password,
            token: "",
            isAdmin: false,
          };

          await UserService.registerUser(newUser);

          localStorage.setItem("auth", "true");
          localStorage.setItem("login", newUser.login);

          dispatch(AuthActionCreators.setUser(newUser));
          dispatch(AuthActionCreators.setIsAuth(true));
          dispatch(AuthActionCreators.setError(""));

        } catch (err) {
          dispatch(AuthActionCreators.setError("Ошибка при регистрации"));
        }
      },
  clearError: () => (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setError(""));
  },
};
