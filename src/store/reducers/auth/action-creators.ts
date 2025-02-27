// import {
//   AuthActionEnum,
//   SetAuthAction,
//   SetIsLoadingAction,
//   SetUserAction,
//   SetErrorAction,
// } from "./types.ts";
// import { IUser } from "../../../models/IUser.ts";
// import axios from "axios";
// import { AppDispatch } from "../../index.ts";
// import UserService from "../../../api/UserService.ts";
//
// export const AuthActionCreators = {
//   setUser: (user: IUser): SetUserAction => ({
//     type: AuthActionEnum.SET_USER,
//     payload: user,
//   }),
//   setIsAuth: (auth: boolean): SetAuthAction => ({
//     type: AuthActionEnum.SET_AUTH,
//     payload: auth,
//   }),
//   setIsLoading: (payload: boolean): SetIsLoadingAction => ({
//     type: AuthActionEnum.SET_IS_LOADING,
//     payload,
//   }),
//   setError: (payload: string): SetErrorAction => ({
//     type: AuthActionEnum.SET_ERROR,
//     payload,
//   }),
//   login:
//     (username: string, password: string) => async (dispatch: AppDispatch) => {
//       try {
//         dispatch(AuthActionCreators.setIsLoading(true));
//         const response = await UserService.getUsers();
//         const mockUser = response.data.find(
//           (user) => user.username === username && user.password === password,
//         );
//         if (mockUser) {
//           localStorage.setItem("auth", "true");
//           localStorage.setItem("username", mockUser.username);
//           dispatch(AuthActionCreators.setUser(mockUser));
//           dispatch(AuthActionCreators.setIsAuth(true));
//         } else {
//           dispatch(
//             AuthActionCreators.setError("Некорректный логин или пароль"),
//           );
//         }
//         dispatch(AuthActionCreators.setIsLoading(false));
//       } catch (err) {
//         dispatch(AuthActionCreators.setError("Произошла ошибка при логине"));
//       }
//     },
//   logout: () => async (dispatch: AppDispatch) => {
//
//       localStorage.removeItem("auth");
//       localStorage.removeItem("username");
//       dispatch(AuthActionCreators.setUser({} as IUser));
//       dispatch(AuthActionCreators.setIsAuth(false));
//
//   },
// };
