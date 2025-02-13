import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Redirect, Route, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
//import { useTypedSelector } from "../hooks/useTypedSelector.ts";
var AppRouter = function () {
    //const { isAuth } = useTypedSelector((state) => state.auth);
    var isAuth = false;
    return (_jsxs(Switch, { children: [publicRoutes.map(function (route) { return (_jsx(Route, { component: route.component, path: route.path, exact: route.exact }, route.path)); }), isAuth &&
                privateRoutes.map(function (route) { return (_jsx(Route, { component: route.component, path: route.path, exact: route.exact }, route.path)); }), _jsx(Redirect, { to: isAuth ? "/home" : "/error" })] }));
};
export default AppRouter;
