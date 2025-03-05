import { RouteObject } from "react-router-dom";
import HomePage from "@/pages/home-page/HomePage";
import LoginPage from "@/pages/login-page/LoginPage";
import RegisterPage from "@/pages/register-page/RegisterPage";
import ErrorPage from "@/pages/error-page/ErrorPage";
import AdminPage from "@/pages/admin-page/AdminPage";
import Cart from "@/pages/cart-page/Cart";
import CatalogPage from "@/pages/catalog-page/CatalogPage";
import PublicRoute from "@/router/PublicRoute";
import PrivateRoute from "@/router/PrivateRoute";

import {
    ADMIN_ROUTE, REGISTRATION_ROUTE, ERROR_ROUTE,
    HOME_ROUTE, LOGIN_ROUTE, CART_ROUTE, CATALOG_ROUTE, REGISTER_ROUTE
} from "@/utils/constants/RouteNames";
export const isAuth = false;
const routes: RouteObject[] = [
    { path: HOME_ROUTE, element: <HomePage /> },
    { path: LOGIN_ROUTE, element: <PublicRoute><LoginPage /></PublicRoute> },
    { path: REGISTRATION_ROUTE, element: <PublicRoute><RegisterPage /></PublicRoute> },
    { path: ERROR_ROUTE, element: <PublicRoute><ErrorPage /></PublicRoute> },
    { path: CATALOG_ROUTE, element: <PublicRoute><CatalogPage /></PublicRoute> },
    {path: REGISTER_ROUTE, element: <PublicRoute><RegisterPage /></PublicRoute>},
    { path: ADMIN_ROUTE, element: <PrivateRoute><AdminPage /></PrivateRoute> },
    { path: CART_ROUTE, element: <PrivateRoute><Cart /></PrivateRoute> },


];

export default routes;