import { ADMIN_ROUTE, REGISTRATION_ROUTE, ERROR_ROUTE, HOME_ROUTE, LOGIN_ROUTE, CART_ROUTE, PRODUCTS_ROUTE } from "../utils/constants/RouteNames";
import LoginPage from "../pages/login-page/LoginPage";
import ErrorPage from "../pages/error-page/ErrorPage";
import AdminPage from "../pages/admin-page/AdminPage";
import Cart from "../pages/cart-page/Cart";
import HomePage from "../pages/home-page/HomePage";
import ProductsPage from "../pages/products-page/ProductsPage";
// export enum RouteNames {
//     LOGIN_ROUTE = "/login",
//  REGISTRATION_ROUTE = "/registration",
// ADMIN_ROUTE = "/admin",
//  CART_ROUTE = "/cart",
//  ERROR_ROUTE = "/error",
//  HOME_ROUTE = "/home",
//  PRODUCTS_ROUTE = "/products"
// }
export var publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: LoginPage,
        exact: true
    },
    {
        path: REGISTRATION_ROUTE,
        component: LoginPage,
        exact: true
    },
    {
        path: ERROR_ROUTE,
        component: ErrorPage,
        exact: true
    },
    {
        path: HOME_ROUTE,
        component: HomePage,
        exact: true
    },
    {
        path: PRODUCTS_ROUTE,
        component: ProductsPage,
        exact: true
    }
];
export var privateRoutes = [
    {
        path: ADMIN_ROUTE,
        component: AdminPage,
        exact: true
    },
    {
        path: CART_ROUTE,
        component: Cart,
        exact: true
    }
];
